import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import css from './LoginPage.module.scss';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authOps';
const initialValues = {
    email: '',
    password: '',
};

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(values, actions) {
        console.log(values);
        dispatch(loginThunk(values))
            .unwrap()
            .then(() => {
                navigate('/', { replace: true });
            })
            .catch(error => {
                console.log(error);
            });
        actions.resetForm();
    }
    return (
        <section>
            <div className={css.formContainer}>
                <h2>Login</h2>
                <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                    <Form>
                        <label>
                            Email
                            <Field type="text" name="email" />
                        </label>
                        <label>
                            Password
                            <Field type="text" name="password" />
                        </label>
                        <button type="submit">Login</button>
                    </Form>
                </Formik>
                <p>
                    If you don`t have one, <Link to="/register">Register</Link>
                </p>
            </div>
        </section>
    );
}
