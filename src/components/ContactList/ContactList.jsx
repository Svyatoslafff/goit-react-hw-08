import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.scss';
import { ThreeDots } from 'react-loader-spinner';
import {
    selectFilteredContacts,
    selectLoading,
} from '../../redux/contacts/selectors';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectLoading);
    return (
        <div className={css.contactListContainer}>
            {!isLoading ? (
                <>
                    {contacts.length === 0 ? (
                        <p className={css.noContactsMessage}>No contacts</p>
                    ) : (
                        <ul className={css.contactList}>
                            {contacts.map(contact => (
                                <Contact
                                    contactInfo={contact}
                                    key={contact.id}
                                />
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )}
        </div>
    );
}
