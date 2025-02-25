import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67b8b842699a8a7baef50bc8.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
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
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        console.log(`delete ${id}`);

        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
