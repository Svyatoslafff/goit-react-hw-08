import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

export default function AppBar() {
    const isLoggedIn = useSelector(selectLoggedIn);

    return (
        <>
            <header>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
