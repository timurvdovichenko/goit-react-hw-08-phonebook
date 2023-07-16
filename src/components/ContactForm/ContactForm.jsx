import { useState } from 'react';
import { FormStyled, LabelStyled, InputStyled, ButtonStyled } from '../Common.styled';
import { Span } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsoperations';
import { getContacts } from 'redux/contacts/contactsSlice';
import { Notify } from 'notiflix';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsRedux = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'number') {
      setNumber(value);
      return;
    }
    if (name === 'name') {
      setName(value);
      return;
    }
    throw new Error(`There is no field name - ${name}`);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const contact = { name: name, number: number };

    const isExist = contactsRedux.find(
      contactFind => contactFind.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (isExist) {
      // alert(`${contact.name} is already in contacts.`);
      Notify.failure(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmitForm}>
      <LabelStyled>
        <Span>Name</Span>
        <InputStyled
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </LabelStyled>
      <LabelStyled>
        <Span>Phone</Span>
        <InputStyled
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </LabelStyled>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
  );
};

export default ContactForm;
