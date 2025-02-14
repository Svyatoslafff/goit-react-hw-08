import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.scss';
import { deleteContact } from '../../redux/contactsSlice';

export default function ContactList() {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filters.name);
    const contacts = useSelector(state => state.contacts.items).filter(item =>
        item.name.includes(filter)
    );

    function onDeleteContact(id) {
        dispatch(deleteContact(id));
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
