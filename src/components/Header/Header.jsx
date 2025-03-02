// import css from './Header.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/authSlice';
import { Link, Outlet } from 'react-router-dom';
import { logoutThunk } from '../../redux/authOps';

export default function Header() {
    const username = useSelector(selectUser).name;
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(logoutThunk());
    }
    return (
        <>
            <header>
                <p>Hello, {username}</p>
                <p onClick={handleClick}></p>
                <Link to="/login" onClick={handleClick}>
                    Logout
                </Link>
            </header>
            <Outlet />
        </>
    );
}
