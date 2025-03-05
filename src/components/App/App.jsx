// import css from './App.module.scss';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContactsThunk } from '../../redux/contactsOps';
// import { useEffect } from 'react';
// import ErrorModal from '../ErrorModal/ErrorModal';
// import { selectError } from '../../redux/contactsSlice';

import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectToken } from '../../redux/auth/selectors';
import { refreshUserThunk } from '../../redux/auth/operations';
import PrivateRoute from '../../routes/PrivateRoute';
import RestrictedRoute from '../../routes/RestrictedRoute';

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
                        <PrivateRoute>
                            <ContactsPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/register"
                    element={<RestrictedRoute component={<RegisterPage />} />}
                />
                <Route
                    path="/login"
                    element={<RestrictedRoute component={<LoginPage />} />}
                />
            </Route>
            {/* <Route path="*" element={ErrorPage} /> */}
        </Routes>
    );
}

export default App;
