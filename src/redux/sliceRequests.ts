import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000/companies';

const headers = { 
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJraW5nQGdtYWlsLmNvbSIsImlkIjoiYzZkOTI5ZTQtZWRiNy00ODZlLTk2MjMtOGZjN2E1YTBlZmVlIiwiaWF0IjoxNjY3MDAzMjkyLCJleHAiOjE2NjcwMDY4OTJ9.onQEFvK_NMieTx4F7yRhwH49zfeP1yWg9qJemu9XlzU',
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
    id: string
};

interface ChangedRequest {
    requestId: string,
    status: {
        status_name: string
    },
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
export const getRequests = createAsyncThunk('getrequest/companies', async (arg, thunkAPI) => {
    try {
        const response = await axios.get(baseURL+'/request', { headers });
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

export const changeRequestStatus = createAsyncThunk('changestatus/companies',async ({status_name, id}: ChangeStatus, thunkAPI) => {
    try {
        const body = {
            status_name
        };
        const response = await axios.put(`${baseURL}/changerequeststatus/${id}`, body, { headers } );
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
                state.loading = false;
            })
            .addCase(changeRequestStatus.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(changeRequestStatus.fulfilled, (state, action: PayloadAction<ChangedRequest>) => {
                state.loading = false;
                state.requests.map(item => {
                    if(item.request_id === action.payload.requestId) {
                        item.status.status_name = action.payload.status.status_name;
                    }
                })
            })
            .addCase(changeRequestStatus.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload.message;
                state.loading = false;
            })
    }   
});

export default sliceRequests.reducer;
export const { cleanError } = sliceRequests.actions;