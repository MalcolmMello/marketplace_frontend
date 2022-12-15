import { configureStore } from '@reduxjs/toolkit'
import formSlice from './formSlice';
import sliceCategories from './sliceCategories';
import slicePerfil from './slicePerfil';
import sliceRequests from './sliceRequests';

const store = configureStore({
    reducer: {
        categories: sliceCategories,
        requests: sliceRequests,
        perfil: slicePerfil,
        form: formSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
// arquivo onde ficará os reducers