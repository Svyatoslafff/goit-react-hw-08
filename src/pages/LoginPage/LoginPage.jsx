import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';
import css from './LoginPage.module.scss';

const initialValues = {
    email: '',
    password: '',
};

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(values, action) {
        dispatch(loginThunk(values))
            .unwrap()
            .then(() => {
                navigate('/');
            });
        action.resetForm();
    }
    return (
        <section className={css.loginSection}>
            <h2>Login</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <ul className={css.fieldsList}>
                        <li>
                            <label className={css.loginField}>
                                Email
                                <Field name="email" />
                            </label>
                        </li>
                        <li>
                            <label className={css.loginField}>
                                Password
                                <Field name="password" />
                            </label>
                        </li>
                    </ul>
                    <button type="submit" className={css.submitButton}>
                        Login
                    </button>
                </Form>
            </Formik>
            <p>
                If you don`t have account,{' '}
                <Link to="/register" className={css.regLink}>
                    Register
                </Link>
            </p>
        </section>
    );
}
