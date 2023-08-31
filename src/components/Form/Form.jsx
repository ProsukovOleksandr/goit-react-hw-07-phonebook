
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, selectContacts } from 'redux/appReducer';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  let initContact = {
    name:'',
    numbers:'',

  };
  const handleAddContact = contact => {
    let { name } = contact;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContacts([...contacts, contact]));
  };
  const onSubmit = e =>{
    e.preventDefault();
    handleAddContact(initContact);
  e.target[0].value = '';
  e.target[1].value = '';
  }
const onChange = e =>{
let id = nanoid(5);
if(e.target.name === "name"){
  initContact.name = e.target.value;
};
if(e.target.name === "number"){
  initContact.numbers = e.target.value;
};
initContact.id = id;
}
  
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          defaultValue={initContact.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          defaultValue={initContact.numbers}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
