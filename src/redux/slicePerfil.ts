import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000/companies';

const headers = { 
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJraW5nQGdtYWlsLmNvbSIsImlkIjoiYzZkOTI5ZTQtZWRiNy00ODZlLTk2MjMtOGZjN2E1YTBlZmVlIiwiaWF0IjoxNjY2NDU4MjIxLCJleHAiOjE2NjY0NjE4MjF9.zMbgxl_-es-cTStEZAmTK6MWRMsxB1gYhJBxFnQrof4',
};

type Response = {
    company_name: string,
    description: string,
    phone_number: string,
    logo: string,
    cover: string
}

interface Perfil {
    perfil: Response,
    loading: boolean,
    error: string | null
};

const INITIAL_STATE = {
    perfil: {},
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
    }
});

export default slicePerfil.reducer;
