import css from './App.module.scss';
import basicContacts from '/src/contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';

function App() {
    const [contacts, setContacts] = useState(() => {
        if (localStorage.getItem('contacts') === null) {
            return basicContacts;
        } else {
            return JSON.parse(localStorage.getItem('contacts'));
        }
    });
    const [contactsToShow, setContactsToShow] = useState(contacts);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (!filter) {
            setContactsToShow(contacts);
        } else {
            setContactsToShow(
                contacts.filter(contact => {
                    return contact.name
                        .toLowerCase()
                        .includes(filter.toLowerCase());
                })
            );
        }
    }, [contacts, filter]);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    function onAddContact(newContact) {
        setContacts([...contacts, newContact]);
    }

    function onFilterContacts(value) {
        setFilter(value);
    }

    function onDeleteContact(id) {
        setContacts(contacts.filter(contact => !(contact.id === id)));
    }

    return (
        <div className={css.phonebookContainer}>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={onAddContact} contacts={contacts} />
            <SearchBox onFilterContacts={onFilterContacts} />
            <ContactList
                contacts={contactsToShow}
                onDeleteContact={onDeleteContact}
            />
        </div>
    );
}

export default App;
