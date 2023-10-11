import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { SearchInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <label>
      <SearchInput
        type="text"
        name="filter"
        placeholder="Search contact by Name..."
        value={filterValue}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </label>
  );
};
