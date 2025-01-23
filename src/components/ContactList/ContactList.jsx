import ContactItem from '../ContactItem/ContactItem';

export default function ContactList({ contacts, onDeleteContact }) {
    // console.log(contacts);

    return (
        <div>
            {contacts.length === 0 ? (
                <p>No contacts</p>
            ) : (
                <ul>
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
