import { Input, Label } from './Filter.styled';
import { onFilter } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find Contacts by name
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(onFilter(e.currentTarget.value))}
      />
    </Label>
  );
};
