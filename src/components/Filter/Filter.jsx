import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filter.slice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterChange(e.target.value));
  };

  return (
    <Input
      type="text"
      name="filter"
      onChange={onChange}
      placeholder="Search"
      value={filter}
    />
  );
};
