import ContactForm from 'components/ContactForm/ContactForm';
import { H2Styled } from './Contacts.styled';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <H2Styled>PhoneBook</H2Styled>
      <ContactForm />
      <H2Styled>Contacts</H2Styled>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
