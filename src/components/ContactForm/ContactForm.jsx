import { useState } from 'react';
import { Form, Label, Input, Button } from '../Common.styled';
import { Span } from './ContactForm.styled';
import { useAddContactMutation, useGetAllContactsQuery } from 'redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contactsData } = useGetAllContactsQuery();
  const [addContact, { isError: isErrorAddContact, error: errorAddContact }] =
    useAddContactMutation();

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
    const contact = { name: name, phone: number };

    const isExist = contactsData.find(
      contactFind => contactFind.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    if (isErrorAddContact) {
      alert(`Something went wrong. The error code is "${errorAddContact.data}"`);
    }
    addContact(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Span>Phone</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
