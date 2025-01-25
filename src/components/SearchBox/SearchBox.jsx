import css from './SeachBox.module.scss';
export default function SearchBox({ onFilterContacts }) {
    function handleChange(event) {
        onFilterContacts(event.target.value);
    }
    return (
        <div className={css.searchContainer}>
            <p>Search:</p>
            <input type="text" onChange={handleChange} />
        </div>
    );
}
