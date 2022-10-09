import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:5000';

interface Response {
    id: string,
    category_name: string,
    products: {
        id: string,
        product_name: string
    }[]
};

interface Categories {
    categories: {
        id: string,
        category_name: string,
        products: {
            id: string,
            product_name: string
        }[]
    }[] | null,
    loading: boolean,
    error: string | null
};

const INITIAL_STATE: Categories = {
    categories: null,
    loading: false,
    error: null
};

export const fetchCategories = createAsyncThunk('companies/category', async () => {
    try {
        const response = await axios.get(baseURL+'/companies/category', { headers: { 'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJ1cmd1ZXJraW5nQGdtYWlsLmNvbSIsImlkIjoiYzZkOTI5ZTQtZWRiNy00ODZlLTk2MjMtOGZjN2E1YTBlZmVlIiwiaWF0IjoxNjY1Mjc2Njc4LCJleHAiOjE2NjUyODAyNzh9.lb0vwgdzD6RpiLpA4tf6SvjW30oGXKiy61FOg9wEG3Y' }});
        let categories = response.data;
        return categories;
    } catch (error) {
        return error
    }
})

const sliceCategories = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        addCategory(state, { payload }: PayloadAction<string>){

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Response[]>) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
            })
    },
});

export default sliceCategories.reducer;
export const { addCategory } = sliceCategories.actions;