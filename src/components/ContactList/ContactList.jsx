import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.scss';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <div className={css.contactListContainer}>
            {contacts.length === 0 ? (
                <p className={css.noContactsMessage}>No contacts</p>
            ) : (
                <ul className={css.contactList}>
                    {contacts.map(contact => (
                        <ContactItem
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
