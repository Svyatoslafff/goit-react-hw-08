import css from './HomePage.module.scss';

export default function HomePage() {
    return (
        <section className={css.homeSection}>
            <h1>Home Page</h1>
            <div>
                <p>Created by:</p>
                <div>
                    <img
                        src="https://avatars.githubusercontent.com/u/174634550?v=4"
                        alt="user-avatar"
                    />
                    <a href="https://github.com/Svyatoslafff">Svyatoslafff</a>
                </div>
            </div>
        </section>
    );
}
