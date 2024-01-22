import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/sliceFilter';
import css from './Filter.css';
import { getFilter } from '../../redux/selectors';

const Filter = function () {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        placeholder="Enter a name"
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;