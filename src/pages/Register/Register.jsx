import { ButtonStyled, FormStyled, InputStyled, LabelStyled } from 'components/Common.styled';
import { Span } from 'components/ContactForm/ContactForm.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
      return;
    }
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'password') {
      setPassword(value);
      return;
    }
    throw new Error(`There is no field name - ${name}`);
  };

  const handleSubmitForm = async e => {
    e.preventDefault();

    try {
      dispatch(authOperations.register({ name, email, password }));

      Notify.success(`${name} registered successfully`);
    } catch (error) {
      Notify.failure(`${name} failed to register`);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <FormStyled onSubmit={handleSubmitForm}>
        <LabelStyled>
          <Span>Name</Span>
          <InputStyled type="text" name="name" required value={name} onChange={handleChange} />
        </LabelStyled>
        <LabelStyled>
          <Span>E-mail</Span>
          <InputStyled type="email" name="email" required value={email} onChange={handleChange} />
        </LabelStyled>
        <LabelStyled>
          <Span>Password</Span>
          <InputStyled
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </LabelStyled>
        <ButtonStyled type="submit">Register</ButtonStyled>
      </FormStyled>
    </>
  );
};

export default Register;
