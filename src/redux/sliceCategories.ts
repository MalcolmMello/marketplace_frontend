import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000';

const headers = { 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJraW5nQGdtYWlsLmNvbSIsImlkIjoiYzZkOTI5ZTQtZWRiNy00ODZlLTk2MjMtOGZjN2E1YTBlZmVlIiwiaWF0IjoxNjY1NDE3ODQwLCJleHAiOjE2NjU0MjE0NDB9.bF5g8RcItYPgc7A-jVSiRUPGwnx_5O6fq3dTMBan1Dw' };

interface Response {
    id: string,
    category_name: string,
    products: {
        id: string,
        product_name: string
    }[],
    message?: string
};

interface AddCategoryResponse {
    message: string,
    newCategory: {
        id: string,
        category_name: string
    }
};

interface Categories {
    categories: {
        id: string,
        category_name: string,
        products: {
            id: string,
            product_name: string,
            description?: string,
            front_cover?: string,
            price?: number,
            review?: number
        }[] | null,
    }[],
    loading: boolean,
    error: string | null
};

const INITIAL_STATE: Categories = {
    categories: [],
    loading: false,
    error: null
};

export const fetchCategories = createAsyncThunk('companies/category', async (arg, thunkAPI) => {
    try {
        const response = await axios.get(baseURL+'/companies/category', { headers: headers});
        if(response.status !== 200) {
            return new Error();
        } else {
            let categories = response.data;
            return categories;
        }
    } catch(error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const postCategory = createAsyncThunk('addcompanies/category', async (category: string, thunkAPI) => {
    try {
        const body = { category: category };
        const response = await axios.post(baseURL+'/companies/category', body, { headers: headers });
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



const sliceCategories = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        cleanError(state, { payload }: PayloadAction<null>) {
            state.error = payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Response[]>) => {
                state.error = null;
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(postCategory.pending, (state, action) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(postCategory.fulfilled, (state, action: PayloadAction<AddCategoryResponse>) => {
                state.loading = false;
                state.categories.push({ id: action.payload.newCategory.id, category_name: action.payload.newCategory.category_name, products: null });
            })
            .addCase(postCategory.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default sliceCategories.reducer;
export const { cleanError } = sliceCategories.actions;