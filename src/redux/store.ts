import { configureStore } from '@reduxjs/toolkit'
import sliceCategories from './sliceCategories';

const store = configureStore({
    reducer: {
        categories: sliceCategories
    }
});

export default store;
// arquivo onde ficará os reducers