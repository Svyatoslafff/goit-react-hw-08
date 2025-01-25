import css from './ContactItem.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

export default function ContactItem({
    contactInfo: { name, number, id },
    onDeleteContact,
}) {
    return (
        <li className={css.contactListItem}>
            <ul className={css.infoList}>
                <li>
                    <IoPersonSharp />
                    <p>Name: {name}</p>
                </li>
                <li>
                    <FaPhoneAlt />
                    <p>Number: {number}</p>
                </li>
            </ul>
            <button type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </li>
    );
}
