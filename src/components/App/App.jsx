import css from './App.module.scss';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useEffect } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';
import { selectError } from '../../redux/contactsSlice';

function App() {
    const error = useSelector(selectError);
    if (error) {
        document.querySelector('body').classList.add('error');
    }

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
            {error && <ErrorModal />}
        </div>
    );
}

export default App;
