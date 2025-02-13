import css from './App.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contactsSlice';
import { changeFilter } from '../../redux/filtersSlice';

function App() {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filters.name);
    const contacts = useSelector(state => state.contacts.items).filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    function onAddContact(newContact) {
        dispatch(addContact(newContact));
    }

    function onFilterContacts(value) {
        dispatch(changeFilter(value));
    }

    function onDeleteContact(id) {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css.phonebookContainer}>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={onAddContact} contacts={contacts} />
            <SearchBox onFilterContacts={onFilterContacts} />
            <ContactList
                contacts={contacts}
                onDeleteContact={onDeleteContact}
            />
        </div>
    );
}

export default App;
