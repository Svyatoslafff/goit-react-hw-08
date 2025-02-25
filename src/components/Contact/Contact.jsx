import css from './Contact.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
// import { useSelector } from 'react-redux';
// import { selectLoading } from '../../redux/contactsSlice';
import { ThreeDots } from 'react-loader-spinner';

export default function ContactItem({
    contactInfo: { name, number, id, isLoading },
    onDeleteContact,
}) {
    return (
        <li className={css.contactListItem}>
            {!isLoading ? (
                <div>
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
                </div>
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
        </li>
    );
}
