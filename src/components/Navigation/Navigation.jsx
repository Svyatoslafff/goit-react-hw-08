import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.scss';

export default function Navigation({ buildClasses }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.navigationContainer}>
            {isLoggedIn ? (
                <ul>
                    <li>
                        <NavLink className={buildClasses} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={buildClasses} to="/contacts">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <NavLink className={buildClasses} to="/">
                    Home
                </NavLink>
            )}
        </nav>
    );
}
