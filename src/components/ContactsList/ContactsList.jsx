import { List, Item, Button } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactOperation';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filterContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter);
  });

  return (
    <List>
      {filterContacts.map(({ id, number, name }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            onClick={e => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </Button>
        </Item>
      ))}
    </List>
  );
};
