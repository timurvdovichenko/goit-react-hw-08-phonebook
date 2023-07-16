import { ButtonStyled, FormStyled, InputStyled, LabelStyled } from 'components/Common.styled';
import { Span } from 'components/ContactForm/ContactForm.styled';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  //   const token = localStorage.getItem('persist:token');
  //   console.log('token :>> ', token);
  //   const tokenParse = JSON.parse(token);

  //   console.log('tokenParse :>> ', tokenParse);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
      return;
    }
    if (name === 'password') {
      setPassword(value);
      return;
    }
    throw new Error(`There is no field data in - ${name}`);
  };

  const handleSubmitForm = async e => {
    e.preventDefault();

    try {
      dispatch(authOperations.login({ email, password }));
    } catch (error) {
      Notify.failure(`${email} failed to login`);
    }
    resetForm();
  };

  const resetForm = () => {
    setPassword('');
    setEmail('');
  };
  return (
    <>
      <FormStyled onSubmit={handleSubmitForm}>
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
        <ButtonStyled type="submit">Login</ButtonStyled>
      </FormStyled>
    </>
  );
};

export default Login;
