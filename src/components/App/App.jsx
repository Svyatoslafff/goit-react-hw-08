// import css from './App.module.scss';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContactsThunk } from '../../redux/contactsOps';
import { useEffect } from 'react';
// import ErrorModal from '../ErrorModal/ErrorModal';
// import { selectError } from '../../redux/contactsSlice';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RegisterPage from '../../pages/registerPage/registerPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import LoginPage from '../../pages/Login/loginPage';
import { selectToken } from '../../redux/authSlice';
import { refreshUserThunk } from '../../redux/authOps';
import Header from '../Header/Header';

function App() {
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            dispatch(refreshUserThunk(token))
                .unwrap()
                .catch(() => {
                    navigate('/login');
                });
        } else {
            navigate('/login');
        }
    }, []);

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<Header />}>
                    <Route index element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<RegisterPage />} />
            </Routes>
        </>
    );
}

export default App;
