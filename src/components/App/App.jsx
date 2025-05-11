import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectToken } from '../../redux/auth/selectors';
import { refreshUserThunk } from '../../redux/auth/operations';
import PrivateRoute from '../../routes/PrivateRoute';
import RestrictedRoute from '../../routes/RestrictedRoute';
import ErrorModal from '../../pages/ErrorModal/ErrorModal';
import Layout from '../Layout/Layout';

function App() {
    const token = useSelector(selectToken);
    const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(refreshUserThunk(token));
        }
    }, []);

    return isRefreshing ? null : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="contacts"
                    element={
                        <PrivateRoute
                            component={<ContactsPage />}
                            redirectTo="/login"
                        />
                    }
                />
                <Route
                    path="register"
                    element={<RestrictedRoute component={<RegisterPage />} />}
                />
                <Route
                    path="login"
                    element={<RestrictedRoute component={<LoginPage />} />}
                />
                <Route path="*" element={<ErrorModal />} />
            </Route>
        </Routes>
    );
}

export default App;
