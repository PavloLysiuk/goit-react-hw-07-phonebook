import { Title, NoContacts } from './ContactList.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectFilter, selectLoading } from 'redux/selectors';
import { Blocks } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {contacts.length === 0 && isLoading && (
        <Blocks
          height="60"
          width="60"
          wrapperStyle={{
            margin: '0 auto',
            display: 'flex',
          }}
          wrapperClass="blocks-wrapper"
        />
      )}
      {contacts.length > 0 ? (
        <>
          <Title>Contacts</Title>
          <Filter />
          <ul>
            {getVisibleContacts().map(contact => {
              return <ContactItem key={contact.id} contact={contact} />;
            })}
          </ul>
        </>
      ) : (
        !isLoading && <NoContacts>No contacts in phone book</NoContacts>
      )}
    </>
  );
};
