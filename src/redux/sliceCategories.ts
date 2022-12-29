import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { setLogOut } from './responsibleSlice';
const baseURL = 'http://localhost:5000';

type Credentials = {
    token: string,
    companyId: string,
    category?: string,
    formData?: FormData
};

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

interface UpdateCategoryResponse{
    message: string,
    existCategory: {
        id: string,
        category_name: string
    }
};

interface UpdateCategory {
    id: string,
    new_category_name: string,
    token: string,
    companyId: string
};

interface TypeEditProduct {
    formData: FormData,
    id: string,
    token: string,
    companyId: string
}

interface AddProductResponse {
    message: string,
    newProduct :{
        id: string,
        product_name: string,
        company_id: string,
        categoryProductId: string,
        description: string,
        front_cover: string,
        price: number,
        reviews: number
    }
};

interface EditProductResponse {
    message: string,
    existProduct :{
        id: string,
        product_name: string,
        company_id: string,
        categoryProductId: string,
        description: string,
        front_cover: string,
        price: number,
        reviews: number
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
            categoryProductId?: string,
            price?: number,
            review?: number
        }[],
    }[],
    loading: boolean,
    error: string | null
};

const INITIAL_STATE: Categories = {
    categories: [],
    loading: false,
    error: null
};

export const fetchCategories = createAsyncThunk('companies/category', async ({ token, companyId }: Credentials, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/companies/${companyId}/category`, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error();
        } else {
            let categories = response.data;
            return categories;
        }
    } catch(error: any) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const postCategory = createAsyncThunk('addcompanies/category', async ({ token, companyId, category }: Credentials, thunkAPI) => {
    try {
        const body = { category: category, companyId};
        const response = await axios.post(`${baseURL}/companies/category`, body, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error()
        } else {
            let newCategory = response.data;
            return newCategory;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const postProduct = createAsyncThunk('addcompanies/product', async ({formData, token, companyId}: Credentials, thunkAPI) => {
    try {
        formData && formData.append('companyId', companyId);
        const response = await axios.post(`${baseURL}/companies/product`, formData, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error()
        } else {
            let newProduct = response.data;
            return newProduct;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});


export const editProduct = createAsyncThunk('editcompanies/editproduct', async ({formData, id, companyId, token}: TypeEditProduct, thunkAPI) => {
    try {
        formData.append('companyId', companyId);
        const response = await axios.put(`${baseURL}/companies/product/${id}`, formData, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error()
        } else {
            let responseEditProduct = response.data;
            return responseEditProduct;
        }
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const editCategory = createAsyncThunk('editcompanies/category', async ({id, new_category_name, companyId, token}: UpdateCategory, thunkAPI) => {
    try {
        const body = {
            new_category_name,
            companyId
        };
        
        const response = await axios.put(`${baseURL}/companies/category/${id}`, body, { headers: {
            'Authorization' : `Bearer ${token}`,
        }});
        if(response.status === 403) {
            setLogOut();
        } else if(response.status !== 200) {
            return new Error()
        } else {
            let existCategory = response.data;
            return existCategory;
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
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload.message;
            })
            .addCase(postCategory.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(postCategory.fulfilled, (state, action: PayloadAction<AddCategoryResponse>) => {
                state.loading = false;
                state.categories.push({ id: action.payload.newCategory.id, category_name: action.payload.newCategory.category_name, products: [] });
            })
            .addCase(postCategory.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload;
            })
            .addCase(editCategory.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(editCategory.fulfilled, (state, action: PayloadAction<UpdateCategoryResponse>) => {
                state.loading = false;
                state.categories.forEach(item => {
                    if(item.id === action.payload.existCategory.id) item.category_name = action.payload.existCategory.category_name;
                });
            })
            .addCase(editCategory.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload;
            })
            .addCase(postProduct.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(postProduct.fulfilled, (state, action: PayloadAction<AddProductResponse>) => {
                state.loading = false;
                state.categories.forEach(item => { 
                    if (item.id === action.payload.newProduct.categoryProductId) {
                        item.products?.push({
                            id: action.payload.newProduct.id,
                            product_name: action.payload.newProduct.product_name,
                            description: action.payload.newProduct.description,
                            front_cover: action.payload.newProduct.front_cover,
                            price: action.payload.newProduct.price,
                            review: action.payload.newProduct.reviews
                        });
                    };
                });
            })
            .addCase(postProduct.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload;
            })
            .addCase(editProduct.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(editProduct.fulfilled, (state, action: PayloadAction<EditProductResponse>) => {
                state.loading = false;
                state.categories.forEach(item => item.products.forEach(product => {
                    if(product.id === action.payload.existProduct.id) {
                        product.product_name = action.payload.existProduct.product_name;
                        product.description = action.payload.existProduct.description
                        product.categoryProductId = action.payload.existProduct.categoryProductId;
                        product.price = action.payload.existProduct.price;
                        product.front_cover = action.payload.existProduct.front_cover
                    }
                }));
            })
            .addCase(editProduct.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                if(action.payload.message === "jwt expired" || action.payload.message === "Invalid Token") {
                    localStorage.clear();
                }
                state.error = action.payload;
            })
    },
});

export default sliceCategories.reducer;
export const { cleanError } = sliceCategories.actions;