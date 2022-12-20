import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:5000';

interface Login {
    password: string,
    email: string
};

type Companies = {
    id: string,
    isMainCompany: boolean
};

interface LoginAccount {
    token: string | null,
    subscription_status: "incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null | undefined;
    responsible_companies: Companies[],
    actual_company_id: string | null,
    onboarding: boolean,
    loading: boolean,
    error: string | null
};

interface Response {
    token: string;
    subscription_status: "incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null;
    responsible_companies: Companies[]
}

const initialState = {
    token: null,
    subscription_status: undefined,
    actual_company_id: null,
    responsible_companies: [],
    onboarding: false,
    loading: false,
    error: null
} as LoginAccount;

export const signinResponsible = createAsyncThunk('companies/signin', async ({password, email}: Login, thunkAPI) => {
    try {
        const body = { password, email };
        const response = await axios.post(baseURL+'/companies/signin', body);
        if(response.status !== 200) {
            return new Error()
        } else {
            let newCategory = response.data;
            return newCategory;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const responsibleSlice = createSlice({
    name: 'responsible',
    initialState: initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setSubscriptionStatus: (state, action: PayloadAction<"incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null>) => {
            state.subscription_status = action.payload;
        },
        setResponsibleCompanies: (state, action: PayloadAction<Companies[]>) => {
            state.responsible_companies = action.payload;
        },
        setOnboarding: (state, action: PayloadAction<boolean>) => {
            state.onboarding = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(signinResponsible.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(signinResponsible.fulfilled, (state, action: PayloadAction<Response>) => {
                state.error = null;
                state.token = action.payload.token;
                state.subscription_status = action.payload.subscription_status;
                state.responsible_companies = action.payload.responsible_companies;
                action.payload.responsible_companies.forEach((item) => {
                    if(item.isMainCompany) { state.actual_company_id = item.id }
                });
                state.loading = false;
            })
            .addCase(signinResponsible.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    }
});

export const { setToken, setSubscriptionStatus, setResponsibleCompanies, setOnboarding } = responsibleSlice.actions;

export default responsibleSlice.reducer;