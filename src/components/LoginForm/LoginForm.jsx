import { Field, Form, Formik } from 'formik';
import css from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';

const initialValues = {
    email: '',
    password: '',
};

export default function LoginForm() {
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
    );
}
