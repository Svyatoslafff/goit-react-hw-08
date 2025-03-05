import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from '../auth/operations';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token;
            setToken(token);
            return (await axios.get('/contacts')).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token;
            setToken(token);
            return (await axios.post('/contacts', contact)).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token;
            setToken(token);
            const {
                data: { id: resId },
            } = await axios.delete(`/contacts/${id}`);
            return resId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
