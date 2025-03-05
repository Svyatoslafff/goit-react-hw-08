import css from './Contact.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
// import { useSelector } from 'react-redux';
// import { selectLoading } from '../../redux/contactsSlice';
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import clsx from 'clsx';
import { deleteContactThunk } from '../../redux/contacts/operations';

export default function ContactItem({ contactInfo: { name, number, id } }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    function onDeleteContact(id) {
        setIsLoading(true);
        dispatch(deleteContactThunk(id))
            .unwrap()
            .finally(() => setIsLoading(false));
    }

    return (
        <li className={css.contactListItem}>
            <div
                className={clsx(
                    css.contactInfoContainer,
                    isLoading && css.noContent
                )}
            >
                <ul className={css.infoList}>
                    <li>
                        <IoPersonSharp />
                        <p className={css.infoElement}>
                            <span>Name:</span> {name}
                        </p>
                    </li>
                    <li>
                        <FaPhoneAlt />
                        <p className={css.infoElement}>
                            <span>Number:</span> {number}
                        </p>
                    </li>
                </ul>
                <button type="button" onClick={() => onDeleteContact(id)}>
                    Delete
                </button>
            </div>
            {isLoading && (
                <div className={clsx(css.loader, isLoading && css.onLoading)}>
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
                </div>
            )}
        </li>
    );
}
