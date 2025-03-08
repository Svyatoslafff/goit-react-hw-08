import { Link } from 'react-router-dom';
import css from './RegistrationPage.module.scss';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegisterPage() {
    return (
        <section className={css.regSection}>
            <h2>Register</h2>
            <RegistrationForm />
            <p>
                If you already have account,{' '}
                <Link to="/login" className={css.loginLink}>
                    Login
                </Link>
            </p>
        </section>
    );
}
