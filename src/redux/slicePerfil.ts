import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { StringMappingType } from 'typescript';

const baseURL = 'http://localhost:5000/companies';

const headers = { 
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJraW5nQGdtYWlsLmNvbSIsImlkIjoiYzZkOTI5ZTQtZWRiNy00ODZlLTk2MjMtOGZjN2E1YTBlZmVlIiwiaWF0IjoxNjY3Mzk3NDMxLCJleHAiOjE2Njc0MDEwMzF9.5XlL_WTKBXqdw_r92FAebmcbTGN42jCpmMX8LwIryqk',
};

type Response = {
    company_name: string,
    description: string,
    phone_number: string,
    logo: string,
    cover: string
}

type AddressResponse = {
    zip_code: string,
    street: string,
    state: string,
    city: string,
    district: string,
    number: string
};

type AddressData = {
    zip_code: string;
    street: string;
    district: string;
    city: string;
    state: string;
    address_number: string;
}

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

export const getPerfilData = createAsyncThunk("getperfil/companies", async (arg, thunkAPI) => {
    try {
        const response = await axios.get(baseURL+'/perfil', { headers });
        if(response.status !== 200) {
            return new Error();
        } else {
            let { data } = response;
            return data;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const getAddress = createAsyncThunk("getaddress/companies", async (arg, thunkAPI) => {
    try {
        const response = await axios.get(baseURL+'/address', { headers });
        if(response.status !== 200) {
            return new Error();
        } else {
            let { data } = response;
            return data;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const editPerfil = createAsyncThunk('editcompanies/perfil', async (formData: FormData, thunkAPI) => {
    try {
        const response = await axios.post(baseURL+'/perfil', formData, { headers: headers });
        if(response.status !== 200) {
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
        const response = await axios.put(baseURL+'/updateaddress', body, { headers: headers });
        if(response.status !== 200) {
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
                state.error = action.payload.message;
            })
    }
});

export default slicePerfil.reducer;
