import { configureStore } from '@reduxjs/toolkit'
import sliceCategories from './sliceCategories';

const store = configureStore({
    reducer: {
        categories: sliceCategories
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
// arquivo onde ficará os reducers