import { createSlice } from '@reduxjs/toolkit';
import {
    loginThunk,
    logoutThunk,
    refreshUserThunk,
    registerThunk,
} from './operations';

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logoutThunk.fulfilled, () => initialState)
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(refreshUserThunk.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.isRefreshing = false;
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(refreshUserThunk.rejected, state => {
                state.isRefreshing = false;
            });
    },
});

export const authReducer = slice.reducer;
