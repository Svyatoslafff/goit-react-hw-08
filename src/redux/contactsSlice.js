import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
    addContactThunk,
    deleteContactThunk,
    fetchContactsThunk,
} from './contactsOps';

const initialState = { items: [], loading: true, error: false };

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        clearContacts(state) {
            state.items = [];
        },
    },
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

            // addContact
            // .addCase(addContactThunk.pending, state => {
            //     state.loading = true;
            // })
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
export const { clearContacts } = slice.actions;

// selectors
export const selectFilter = state => state.filters.name;
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectFilter, selectContacts],
    (filter, contacts) => {
        return contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
