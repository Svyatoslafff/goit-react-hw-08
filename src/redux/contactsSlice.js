import { createSlice } from '@reduxjs/toolkit';
import basicContacts from '/src/contacts.json';

const initialState = { items: basicContacts };

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },
    },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
