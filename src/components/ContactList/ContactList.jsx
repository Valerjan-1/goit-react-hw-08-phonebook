import css from './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCont, getFilter } from '../../redux/selectors';
import { delContactsThunk } from '../../redux/contactsThunk';

const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getCont);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();

  return (
    <ul className={css.listContact}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.itemContact} key={id}>
          <p className={css.contactName}>
            {name}:{number}
            <button
              data-id={id}
              onClick={() => dispatch(delContactsThunk(id))}
              className={css.buttonDeleteContact}
              type="button"
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;