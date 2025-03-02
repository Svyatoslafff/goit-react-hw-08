import css from './ContactsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contactsOps';
import { useEffect } from 'react';
import { clearContacts, selectError } from '../../redux/contactsSlice';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import { selectLoggedIn, selectToken } from '../../redux/authSlice';

function ContactsPage() {
    const authorized = useSelector(selectLoggedIn);
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    if (error) {
        document.querySelector('body').classList.add('error');
    }

    useEffect(() => {
        // dispatch(clearContacts);
        if (authorized) {
            dispatch(fetchContactsThunk());
        }
    }, [authorized]);

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

export default ContactsPage;
