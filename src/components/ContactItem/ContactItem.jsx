import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { formatContactNumber } from 'utils/formatContactNumber';
import { ListItem, Text, DeleteButton } from './Contactitem.styled';
import { PiTrash } from 'react-icons/pi';

export const ContactItem = ({ contact }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  return (
    <ListItem key={contact.id}>
      <Text>
        {contact.name}: {formatContactNumber(contact.number)}
      </Text>
      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
          setIsDeleting(true);
        }}
        disabled={isDeleting}
      >
        <PiTrash />
      </DeleteButton>
    </ListItem>
  );
};
