import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:5000';

interface Login {
    password: string,
    email: string
};

interface Signup {
    responsible_name: string,
    cpf: string,
    rg: string,
    email: string,
    password: string,
    phone_number: string,
    company_name: string,
    company_email: string,
    company_phone_number: string,
    description: string,
    cnpj: string,
    display_name: string,
    address_number?: string,
    longitude: string,
    latitude: string
};

type Companies = {
    id: string,
    isMainCompany: boolean
};

interface LoginAccount {
    token: string | null,
    subscription_status: "incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null | undefined;
    responsible_companies: Companies[],
    current_company_id: string | null,
    responsible_name: string | null,
    subscription_data: {
        id: string | null,
        brand: string | null,
        payment_method: string | null,
        period_start: string | null
    }
    loading: boolean,
    error: string | null
};

interface Response {
    token: string;
    subscription_status: "incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null;
    responsible_companies: Companies[],
    responsible_name: string,
    subscription_data: {
        id: string,
        brand: string,
        payment_method: string,
        period_start: string
    }
    clientSecret?: string
}

interface ResponseCancelSubscription {
    id: string,
    status: "incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null;
}

const initialState = {
    token: null,
    subscription_status: undefined,
    current_company_id: null,
    responsible_companies: [],
    responsible_name: null,
    subscription_data: {
        id: null,
        brand: null,
        payment_method: null,
        period_start: null
    },
    loading: false,
    error: null
} as LoginAccount;

export const signinResponsible = createAsyncThunk('companies/signin', async ({password, email}: Login, thunkAPI) => {
    try {
        const body = { password, email };
        const response = await axios.post(baseURL+'/companies/signin', body);
        
        
        if(response.status !== 200) {
            console.log(response)
            return new Error()
        } else {
            let auth = response.data;
            return auth;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const signupResponsible = createAsyncThunk('companies/signup', async (data: Signup, thunkAPI) => {
    try {
        const body = data;
        const response = await axios.post(baseURL+'/companies/signup', body);
        
        if(response.status !== 200) {
            return new Error()
        } else {
            let auth = response.data;
            return auth;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getResponsible = createAsyncThunk('companies/getresponsible', async (token: string, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/companies/responsible-data`, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        
        if(response.status !== 200) {
            return new Error()
        } else {
            let auth = response.data;
            return auth;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const cancelSubscription = createAsyncThunk('companies/cancelSubscription', async (token: string, thunkAPI) => {
    try {
        const response = await axios.post(`${baseURL}/companies/cancel-subscription`, null, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status !== 200) {
            return new Error()
        } else {
            let auth = response.data;
            return auth;
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
        setLogOut: () => {
            localStorage.clear();
            window.location.reload();
        }
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
                    if(item.isMainCompany) { state.current_company_id = item.id }
                });
                localStorage.setItem('token', state.token);
                state.loading = false;
            })
            .addCase(signinResponsible.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(signupResponsible.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(signupResponsible.fulfilled, (state, action: PayloadAction<Response>) => {
                state.error = null;
                state.token = action.payload.token;
                state.subscription_status = action.payload.subscription_status;
                state.responsible_companies = action.payload.responsible_companies;
                action.payload.responsible_companies.forEach((item) => {
                    if(item.isMainCompany) { state.current_company_id = item.id }
                });
                localStorage.setItem('token', state.token);
                state.loading = false;  
            })
            .addCase(signupResponsible.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(getResponsible.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getResponsible.fulfilled, (state, action: PayloadAction<Response>) => {
                state.error = null;
                state.subscription_status = action.payload.subscription_status;
                state.responsible_companies = action.payload.responsible_companies;
                state.responsible_name = action.payload.responsible_name;
                state.subscription_data = action.payload.subscription_data;
                action.payload.responsible_companies.forEach((item) => {
                    if(item.isMainCompany) { state.current_company_id = item.id }
                });
                state.loading = false;  
            })
            .addCase(getResponsible.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload?.message === "jwt expired" || action.payload?.message === "Invalid Token") {
                    state.token = null;
                    localStorage.clear();
                }
                state.error = action.payload?.message;
            })
            .addCase(cancelSubscription.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(cancelSubscription.fulfilled, (state, action: PayloadAction<ResponseCancelSubscription>) => {
                state.error = null;
                state.subscription_status = action.payload.status;
                state.loading = false;  
            })
            .addCase(cancelSubscription.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload?.message === "jwt expired" || action.payload?.message === "Invalid Token") {
                    state.token = null;
                    localStorage.clear();
                }
                state.error = action.payload?.message;
            })
    }
});

export const { setToken, setSubscriptionStatus, setResponsibleCompanies, setLogOut } = responsibleSlice.actions;

export default responsibleSlice.reducer;