import ContactForm from '../components/ContactForm/ContactForm';
import css from '../components/App.css';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from '../redux/contactsThunk';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default Contacts;