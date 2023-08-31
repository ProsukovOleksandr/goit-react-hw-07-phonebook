import { ContactListItem } from './ContactListItem/ContactListItem';
import { deleteContacts, selectContacts, selectFilter } from 'redux/appReducer';

import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContacts(contacts.filter(contact => contact.id !== id)));
  };
  return (
    <div>
      {filterContacts().map(contact => {
        const { id } = contact;
        return (
          <ContactListItem
            key={id}
            contact={contact}
            onDeleteContact={handleDeleteContact}
          />
        );
      })}
    </div>
  );
};
