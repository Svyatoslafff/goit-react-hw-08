export default function ContactItem({
    contactInfo: { name, number, id },
    onDeleteContact,
}) {
    return (
        <li>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </li>
    );
}
