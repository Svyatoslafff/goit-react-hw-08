import { useSelector } from 'react-redux';
import css from './ErrorModal.module.scss';
import { selectError } from '../../redux/contactsSlice';
import { AiOutlineReload } from 'react-icons/ai';

export default function ErrorModal() {
    const error = useSelector(selectError);
    return (
        <div className={css.modalContainer}>
            <div className={css.modalContent}>
                <h2>Error!</h2>
                <p>{error.message}</p>
                <button
                    className={css.reloadButton}
                    onClick={() => window.location.reload()}
                >
                    <AiOutlineReload size={40} />
                </button>
            </div>
        </div>
    );
}
