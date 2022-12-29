import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { setLogOut } from './responsibleSlice';

const baseURL = 'http://localhost:5000/companies';

type Credentials = {
    token: string,
    companyId: string,
    formData?: FormData
};

type Response = {
    company_id: string,
    company_name: string,
    company_email: string,
    description: string,
    phone_number: string,
    cnpj: string,
    subscription_status: string,
    onboarding: boolean,
    logo: string,
    cover: string,
}

type AddressResponse = {
    display_name: string,
    number: string
};

type AddressData = {
    zip_code: string;
    street: string;
    district: string;
    city: string;
    state: string;
    address_number: string;
    token: string,
    companyId: string
};

interface Perfil {
    perfil: Response,
    address: AddressResponse,
    loading: boolean,
    error: string | null
};

const INITIAL_STATE = {
    perfil: {},
    address: {},
    loading: false,
    error: null
} as Perfil;

export const getPerfilData = createAsyncThunk("getperfil/companies", async ({ token, companyId }: Credentials, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/${companyId}/perfil`, { headers: { 
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error();
        } else {
            let { data } = response;
            return data;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const getAddress = createAsyncThunk("getaddress/companies", async ({ token, companyId }: Credentials, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/${companyId}/address`, { headers: { 
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error();
        } else {
            let { data } = response;
            return data;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const editPerfil = createAsyncThunk('editcompanies/perfil', async ({formData, token, companyId}: Credentials, thunkAPI) => {
    try {
        formData && formData.append('companyId', companyId as string);
        const response = await axios.post(baseURL+'/perfil', formData, { headers: { 
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error()
        } else {
            let newPerfilData = response.data;
            return newPerfilData;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const editAddress = createAsyncThunk('editaddress/address', async (data: AddressData, thunkAPI) => {
    try {
        const body = data;
        const response = await axios.put(baseURL+'/updateaddress', body, { headers: { 
            'Authorization' : `Bearer ${data.token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error()
        } else {
            let { data } = response;
            return data;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const slicePerfil = createSlice({
    name: 'perfil',
    initialState: INITIAL_STATE,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getPerfilData.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getPerfilData.fulfilled, (state, action: PayloadAction<Response>) => {
                state.error = null;
                state.loading = false;
                state.perfil = action.payload;
            })
            .addCase(getPerfilData.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload.message;
            })
            .addCase(editPerfil.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(editPerfil.fulfilled, (state, action: PayloadAction<Response>) => {
                state.error = null;
                state.loading = false;
                state.perfil = action.payload;
            })
            .addCase(editPerfil.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload.message;
            })
            .addCase(getAddress.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getAddress.fulfilled, (state, action: PayloadAction<AddressResponse>) => {
                state.error = null;
                state.loading = false;
                state.address = action.payload;
            })
            .addCase(getAddress.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload.message;
            })
            .addCase(editAddress.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(editAddress.fulfilled, (state, action: PayloadAction<AddressResponse>) => {
                state.error = null;
                state.loading = false;
                state.address = action.payload;
            })
            .addCase(editAddress.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload.message;
            })
    }
});

export default slicePerfil.reducer;
