import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../redux/auth/operations';

export default function UserMenu() {
    const username = useSelector(selectUserName);
    console.log(username);

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
        <div>
            <p>Welcome {username}</p>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}
