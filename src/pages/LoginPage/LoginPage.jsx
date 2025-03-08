import { Link } from 'react-router-dom';
import css from './LoginPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
    return (
        <section className={css.loginSection}>
            <h2>Login</h2>
            <LoginForm />
            <p>
                If you don`t have account,{' '}
                <Link to="/register" className={css.regLink}>
                    Register
                </Link>
            </p>
        </section>
    );
}
