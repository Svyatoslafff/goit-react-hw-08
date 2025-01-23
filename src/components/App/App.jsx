// import css from './App.module.scss';
import basicContacts from '/src/contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState } from 'react';

function App() {
    const [contacts, setContacts] = useState(basicContacts);

    function onAddContact(newContact) {
        setContacts([...contacts, newContact]);
    }

    function onDeleteContact(id) {
        setContacts(contacts.filter(contact => !(contact.id === id)));
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={onAddContact} contacts={contacts} />
            <SearchBox />
            <ContactList
                contacts={contacts}
                onDeleteContact={onDeleteContact}
            />
        </div>
    );
}

export default App;
