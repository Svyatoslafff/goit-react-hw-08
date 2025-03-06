import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

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
