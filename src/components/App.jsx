import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactOperation';
import { getError, getIsLoading } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />

        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </Container>
    </>
  );
}
