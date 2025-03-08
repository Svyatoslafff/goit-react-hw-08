import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import { Field, Form, Formik } from 'formik';
import css from './RegistrationForm.module.scss';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

export default function RegistrationForm() {
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <ul className={css.fieldsList}>
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
                <button type="submit" className={css.submitButton}>
                    Register
                </button>
            </Form>
        </Formik>
    );
}
