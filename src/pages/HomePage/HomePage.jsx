import css from './HomePage.module.scss';
import { FaHandPointLeft } from 'react-icons/fa';

export default function HomePage() {
    return (
        <section className={css.homeSection}>
            <h1>Home Page</h1>
            <div className={css.contentContainer}>
                <p>Created by:</p>
                <div className={css.authorInfo}>
                    <a href="https://github.com/Svyatoslafff">
                        <img
                            src="https://avatars.githubusercontent.com/u/174634550?v=4"
                            alt="user-avatar"
                        />
                        <span>Svyatoslafff</span>
                        <FaHandPointLeft />
                    </a>
                </div>
            </div>
        </section>
    );
}
