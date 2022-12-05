import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, acessToken } = action.payload;
            state.user = user;
            state.token = acessToken;
        },
        logOut: (state, action) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = authSlice.getInitialState().user;
export const selectCurrentToken = authSlice.getInitialState().token;