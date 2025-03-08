import { Outlet } from 'react-router-dom';
import css from './Layout.module.scss';
import AppBar from '../AppBar/AppBar';

function Layout() {
    return (
        <>
            <header className={css.headerContainer}>
                <AppBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
