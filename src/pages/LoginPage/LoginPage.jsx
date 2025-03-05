import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';

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
        <section>
            <h2>Login</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <ul>
                        <li>
                            <label>
                                Email
                                <Field name="email" />
                            </label>
                        </li>
                        <li>
                            <label>
                                Password
                                <Field name="password" />
                            </label>
                        </li>
                    </ul>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
            <p>
                If you don`t have account, <Link to="/register">Register</Link>
            </p>
        </section>
    );
}
