import { useDispatch } from 'react-redux';
import css from './SeachBox.module.scss';
import { changeFilter } from '../../redux/filtersSlice';
export default function SearchBox() {
    const dispatch = useDispatch();

    function onFilterContacts(value) {
        dispatch(changeFilter(value));
    }

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
