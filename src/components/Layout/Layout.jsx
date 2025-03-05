import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { selectLoggedIn, selectUserName } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

export default function Layout() {
    const isLoggedIn = useSelector(selectLoggedIn);
    const username = useSelector(selectUserName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick() {
        dispatch(logoutThunk())
            .unwrap()
            .then(() => {
                navigate('/login');
            });
    }
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/contacts">Contacts</Link>
                        <div>
                            {/* <p>Welcome {username}</p> */}
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
