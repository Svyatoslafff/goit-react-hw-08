import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import css from './AppBar.module.scss';
import clsx from 'clsx';

export default function AppBar() {
    const isLoggedIn = useSelector(selectLoggedIn);
    function buildClasses({ isActive }) {
        return clsx(css.link, isActive ? css.activeLink : css.notActiveLink);
    }

    return (
        <>
            <header className={css.headerContainer}>
                <Navigation buildClasses={buildClasses} />
                <div className={css.titleContainer}>
                    <h1>Phonebook</h1>
                </div>
                {isLoggedIn ? (
                    <UserMenu />
                ) : (
                    <AuthNav buildClasses={buildClasses} />
                )}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
