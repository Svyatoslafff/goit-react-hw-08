import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

export default function AuthNav({ buildClasses }) {
    return (
        <nav className={css.authNavContainer}>
            <ul>
                <li>
                    <NavLink to="/register" className={buildClasses}>
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={buildClasses}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
