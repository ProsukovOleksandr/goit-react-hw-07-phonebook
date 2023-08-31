import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDeleteContact }) => {
  const { id, name, numbers } = contact;

  return (
    <div>
      <span>{name}</span>
      <span> {numbers}</span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
