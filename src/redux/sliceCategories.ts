import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Categories {
    category_name: string,
    lenght_products: number
}


const INITIAL_STATE: Categories[] = [
    { category_name: 'Ração', lenght_products: 5 },
    { category_name: 'Areia', lenght_products: 3 }
]

const sliceCategories = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        addCategory(state, { payload }: PayloadAction<string>){
            return [...state, { category_name: payload, lenght_products: 0 }]
        }
    }
});

export default sliceCategories.reducer;
export const { addCategory } = sliceCategories.actions;

export const useMenu = (state: any) => {
    return state.categories as Categories;
};