import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000/companies';

const headers = { 
    'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJraW5nQGdtYWlsLmNvbSIsImlkIjoiYzZkOTI5ZTQtZWRiNy00ODZlLTk2MjMtOGZjN2E1YTBlZmVlIiwiaWF0IjoxNjY1ODYyOTc1LCJleHAiOjE2NjU4NjY1NzV9.Ia2nHQgjygj-0ci1H2hnPw66ZuB6UR8bQeu2sk9juRw',
};
type Request = {
    request_id: string,
    username: string,
    status: string,
    total: number,
    created_at: string,
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
    }   
});

export default sliceRequests.reducer;
export const { cleanError } = sliceRequests.actions;