import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67b8b842699a8a7baef50bc8.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            return (await axios.get('/contacts')).data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', contact);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${id}`);
            return responce.data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
