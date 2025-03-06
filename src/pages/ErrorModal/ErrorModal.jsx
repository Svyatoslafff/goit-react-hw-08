import { useSelector } from 'react-redux';
import css from './ErrorModal.module.scss';
import { AiOutlineReload } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { selectError } from '../../redux/contacts/selectors';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export default function ErrorModal() {
    const navigate = useNavigate();
    let error = useSelector(selectError);
    console.log(error);

    if (!error) {
        error = { message: 'Page not found!' };
    }
    return (
        <div className={css.modalContainer}>
            <div className={css.modalContent}>
                <h2>Error!</h2>
                <p>{error.message}</p>
                <ul className={css.buttonsList}>
                    <li>
                        <button
                            className={clsx(css.reloadButton, css.linkButtons)}
                            onClick={() => window.location.reload()}
                        >
                            <AiOutlineReload size={40} />
                        </button>
                    </li>
                    <li>
                        <button
                            className={clsx(css.homeButton, css.linkButtons)}
                            onClick={() => navigate('/')}
                        >
                            <FaHome size={40} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
