import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const api = axios.create({ baseURL: 'https://connections-api.goit.global/' });

export function setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (body, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', body);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (body, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', body);
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
            const token = thunkAPI.getState().auth.token;
            setToken(token);
            const { data } = await axios.post('/users/logout');
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
            setToken(token);
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
