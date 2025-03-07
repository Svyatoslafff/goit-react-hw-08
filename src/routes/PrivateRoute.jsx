import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const token = useSelector(selectToken);
    return isLoggedIn || token ? children : <Navigate to="/login" />;
}
