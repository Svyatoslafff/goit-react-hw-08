import css from './ContactsPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import ErrorModal from '../ErrorModal/ErrorModal';
import { selectError } from '../../redux/contacts/selectors';

export default function ContactsPage() {
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
            <h2>Contacts</h2>
            <ContactForm />
            <SearchBox />
            <ContactList />
            {error && <ErrorModal />}
        </div>
    );
}
