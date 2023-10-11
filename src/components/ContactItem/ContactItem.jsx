import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';
import { ListItem, Text, DeleteButton } from './Contactitem.styled';
import { PiTrash } from 'react-icons/pi';
import toast from 'react-hot-toast';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={contact.id}>
      <Text>
        {contact.name}: {formatPhoneNumber(contact.number)}
      </Text>
      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
          toast.success(`${contact.name} is successfully deleted`, {
            style: {
              color: 'white',
              background: '#ff8e31',
            },
          });
        }}
      >
        <PiTrash />
      </DeleteButton>
    </ListItem>
  );
};
