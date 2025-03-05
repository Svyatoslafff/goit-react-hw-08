import { useDispatch } from 'react-redux';
import css from './SeachBox.module.scss';
import { changeFilter } from '../../redux/filters/slice';
export default function SearchBox() {
    const dispatch = useDispatch();

    function handleChange(event) {
        const value = event.target.value;
        dispatch(changeFilter(value));
    }

    return (
        <div className={css.searchContainer}>
            <p>Search:</p>
            <input type="text" onChange={handleChange} />
        </div>
    );
}
