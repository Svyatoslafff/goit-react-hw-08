import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshUserThunk } from './authOps';

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
};

export const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(logoutThunk.fulfilled, state => {
                state.user = initialState.user;
                state.token = '';
                state.isLoggedIn = false;
            });
    },
});

export const authSlice = slice.reducer;

export const selectToken = state => state.authData.token;
export const selectLoggedIn = state => state.authData.isLoggedIn;
export const selectUser = state => state.authData.user;
