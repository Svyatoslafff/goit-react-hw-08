import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://connections-api.goit.global',
});

function setAuthToken(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (body, thunkAPI) => {
        try {
            const response = await api.post('/users/login', body);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const registerThunk = createAsyncThunk(
    'auth/signup',
    async (body, thunkAPI) => {
        try {
            const { data } = await api.post('/users/signup', body);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const refreshUserThunk = createAsyncThunk(
    'auth/refresh',
    async (token, thunkAPI) => {
        try {
            setAuthToken(token);
            const { data } = await api.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().authData.token;
            setAuthToken(token);
            const { data } = await api.post('/users/logout');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
