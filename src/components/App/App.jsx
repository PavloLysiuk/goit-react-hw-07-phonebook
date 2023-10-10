import { GlobalStyle } from 'GlobalStyles';
import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import { selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong, please try again later', {
        style: {
          background: '#ffd500',
        },
      });
    }
  }, [error]);

  return (
    <Container>
      <ContactForm />
      <ContactList />
      <GlobalStyle />
      <Toaster
        gutter={4}
        containerStyle={{
          top: 53,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            width: '360px',
            padding: '16px',
          },
        }}
      />
    </Container>
  );
};
