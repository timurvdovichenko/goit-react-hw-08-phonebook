import { ButtonStyled } from '../Common.styled';
import { List, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsSlice';
import { getFilterValue } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/contactsoperations';

const ContactList = () => {
  const contactsRedux = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!contactsRedux) {
      return;
    }
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  return (
    <List>
      {getFilteredContacts().map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <ButtonStyled
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              buttonListStyle={'margin-left: 10px'}
            >
              Delete
            </ButtonStyled>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
