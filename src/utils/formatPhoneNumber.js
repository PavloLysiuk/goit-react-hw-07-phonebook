export const formatPhoneNumber = contact => {
  let newContact;

  const digits = contact.replace(/\D+/g, '');

  if (digits.length === 7) {
    newContact = digits.replace(/^(\d{3})(\d{2})(\d{2})/, '$1 $2$3');
  } else if (digits.length === 8) {
    newContact = digits.replace(/^(\d)(\d{3})(\d{2})(\d{2})/, '$1 $2 $3$4');
  } else if (digits.length === 9) {
    newContact = digits.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2$3$4');
  } else if (digits.length === 10) {
    newContact = digits.replace(
      /^(\d{3})(\d{3})(\d{2})(\d{2})/,
      '($1) $2 $3$4'
    );
  } else if (digits.length === 11) {
    newContact = digits.replace(
      /^(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1 ($2) $3 $4$5'
    );
  } else if (digits.length === 12) {
    newContact = digits.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1 ($2) $3 $4$5'
    );
  } else {
    newContact = contact;
  }

  return newContact;
};
