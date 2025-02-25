import css from './App.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useEffect } from 'react';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    return (
        <div className={css.phonebookContainer}>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
}

export default App;
