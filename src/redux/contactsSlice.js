import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
    addContactThunk,
    deleteContactThunk,
    fetchContactsThunk,
} from './contactsOps';

const initialState = { items: [], loading: false, error: '' };

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            // fetchContacts
            .addCase(fetchContactsThunk.pending, state => {
                state.loading = true;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.map(
                    item => (item = { ...item, isLoading: false })
                );
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // addContact
            .addCase(addContactThunk.pending, state => {
                state.loading = true;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push({ ...action.payload, isLoading: false });
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // deleteContact
            .addCase(deleteContactThunk.pending, (state, action) => {
                state.item[action.payload].isLoading = true;
                console.log('pending');
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                // state.items[action.payload].isLoading = false;
                state.items = state.items.filter(
                    item => item.id !== action.payload
                );
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.log(action.payload);
            });
    },
});

export const contactsReducer = slice.reducer;

// selectors
export const selectFilter = state => state.filters.name;
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectFilter, selectContacts],
    (filter, contacts) => {
        console.log(filter);
        console.log(contacts);

        return contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
