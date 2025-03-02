import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/authOps';
import toast from 'react-hot-toast';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export default function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSubmit(values, actions) {
        dispatch(registerThunk(values))
            .unwrap()
            .then(() => {
                toast.success('Succes!');
                navigate('/login', { replace: true });
            })
            .catch(error => {
                toast.error(`Error! ${error.message}`);
            });
        actions.resetForm();
    }
    return (
        <div>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <label>
                        Name
                        <Field type="text" name="name" />
                    </label>
                    <label>
                        Email
                        <Field type="text" name="email" />
                    </label>
                    <label>
                        Password
                        <Field type="text" name="password" />
                    </label>
                    <button type="submit">Register</button>
                </Form>
            </Formik>
            <p>
                If you have one, please <Link to="/login">Login</Link>
            </p>
        </div>
    );
}
