import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.scss';
import { deleteContactThunk } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    function onDeleteContact(id) {
        console.log(id);

        dispatch(deleteContactThunk(id));
    }
    return (
        <div className={css.contactListContainer}>
            {contacts.length === 0 ? (
                <p className={css.noContactsMessage}>No contacts</p>
            ) : (
                <ul className={css.contactList}>
                    {contacts.map(contact => (
                        <Contact
                            onDeleteContact={onDeleteContact}
                            contactInfo={contact}
                            key={contact.id}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
