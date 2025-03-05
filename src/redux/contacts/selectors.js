import { createSelector } from '@reduxjs/toolkit';

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
