import PhoneBook from '../components/PhoneBook/PhoneBook';
import Main from '../components/Main/Main';
import Contacts from '../components/PhoneBook/Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import contactsOperation from 'redux/contacts/operations';
import { EmptyPhonebookText } from 'components/PhoneBook/Contacts/Contacts.styled';

const ContactsPage = () => {
  const data = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <Main title="Phonebook">
      <PhoneBook />
      {data.length > 0 ? (
        <Contacts name="Contacts" />
      ) : (
        <EmptyPhonebookText>Phonebook порожній</EmptyPhonebookText>
      )}
    </Main>
  );
};

export default ContactsPage;
