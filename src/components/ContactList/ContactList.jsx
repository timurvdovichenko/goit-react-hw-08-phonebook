import { Button } from '../Common.styled';
import { List, ListItem } from './ContactList.styled';
import { useGetAllContactsQuery, useDeleteContactMutation } from 'redux/contactsSlice';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';

const ContactList = () => {
  const { data: contactsRedux, error, isFetching, isError } = useGetAllContactsQuery();

  const [deleteContact, { isError: isErrorDeleteContact, error: errorDeleteContact }] =
    useDeleteContactMutation();

  const filterValue = useSelector(getFilterValue);
  const getFilteredContacts = () => {
    if (!contactsRedux) {
      return;
    }
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  return (
    <>
      {isFetching && <Loader />}
      {getFilteredContacts() && (
        <List>
          {getFilteredContacts().map(({ name, id, phone }) => {
            return (
              <ListItem key={id}>
                {name}: {phone}
                <Button
                  type="button"
                  onClick={() => {
                    deleteContact(id);
                    // console.log(result);
                  }}
                  buttonListStyle={'margin-left: 10px'}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
      {isError && <div>Something went wrong. The error code is {error.originalStatus}</div>}
      {isErrorDeleteContact && (
        <div>Something went wrong. The error code is "{errorDeleteContact.data}"</div>
      )}
    </>
  );
};

export default ContactList;
