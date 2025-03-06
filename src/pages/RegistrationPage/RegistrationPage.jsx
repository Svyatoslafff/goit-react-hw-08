import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { Link, useNavigate } from 'react-router-dom';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(values, action) {
        dispatch(registerThunk(values))
            .unwrap()
            .then(() => {
                navigate('/');
            });
        action.resetForm();
    }
    return (
        <section>
            <h2>Register</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <ul>
                        <li>
                            <label>
                                Name
                                <Field name="name" />
                            </label>
                        </li>
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
                    <button type="submit">Register</button>
                </Form>
            </Formik>
            <p>
                If you already have account, <Link to="/login">Login</Link>
            </p>
        </section>
    );
}
