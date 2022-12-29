import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { setLogOut } from './responsibleSlice';

const baseURL = 'http://localhost:5000/companies';

type Credentials = {
    token: string,
    companyId: string
};

type Request = {
    request_id: string,
    username: string,
    status: {
        status_name: string
    },
    total: number,
    created_at: string,
    isDelivery: boolean,
    products: {
        id: string,
        product_name: string,
        description: string,
        front_cover: string,
        price: number,
        length: number
    }[],
    address: {
        id: string,
        state: string,
        city: string,
        district: string,
        street: string,
        zip_code: string,
        number: string
    }
}

interface ChangeStatus {
    status_name: string,
    id: string,
    token: string,
    companyId: string
};

interface ChangedRequest {
    requestId: string,
    status: {
        status_name: string
    },
    token: string,
    companyId: string
};

interface State {
    requests: Request[],
    loading: boolean,
    error: string | null
};

const INITIAL_STATE = {
    requests: [],
    loading: false,
    error: null
} as State;
/* requisições */
export const getRequests = createAsyncThunk('getrequest/companies', async ({token, companyId}: Credentials, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/${companyId}/request`, { headers: {
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

export const changeRequestStatus = createAsyncThunk('changestatus/companies',async ({status_name, id, token, companyId}: ChangeStatus, thunkAPI) => {
    try {
        const body = {
            status_name,
            companyId
        };

        const response = await axios.put(`${baseURL}/changerequeststatus/${id}`, body, { headers: {
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

/* reducers */
const sliceRequests = createSlice({
    name: 'requests',
    initialState: INITIAL_STATE,
    reducers: {
        cleanError(state, { payload }: PayloadAction<null>) {
            state.error = payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getRequests.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getRequests.fulfilled, (state, action: PayloadAction<Request[]>) => {
                state.requests = action.payload;
            })
            .addCase(getRequests.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload.message;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.loading = false;
            })
            .addCase(changeRequestStatus.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(changeRequestStatus.fulfilled, (state, action: PayloadAction<ChangedRequest>) => {
                state.loading = false;
                state.requests.forEach(item => {
                    if(item.request_id === action.payload.requestId) {
                        item.status.status_name = action.payload.status.status_name;
                    }
                })
            })
            .addCase(changeRequestStatus.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload.message;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.loading = false;
            })
    }   
});

export default sliceRequests.reducer;
export const { cleanError } = sliceRequests.actions;