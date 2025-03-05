import { createSlice } from '@reduxjs/toolkit';
import {
    addContactThunk,
    deleteContactThunk,
    fetchContactsThunk,
} from './operations';
import { logoutThunk } from '../auth/operations';

const initialState = { items: [], loading: true, error: false };

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            // fetchContacts
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutThunk.fulfilled, () => initialState)

            // addContact
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.error = action.payload;
            })

            // deleteContact
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    item => item.id !== action.payload
                );
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const contactsReducer = slice.reducer;
