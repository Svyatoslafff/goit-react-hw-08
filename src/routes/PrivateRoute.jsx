import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component, redirectTo = '/' }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const token = useSelector(selectToken);
    return isLoggedIn || token ? component : <Navigate to={redirectTo} />;
}
