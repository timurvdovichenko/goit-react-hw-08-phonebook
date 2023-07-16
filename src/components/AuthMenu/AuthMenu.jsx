const { HeaderListStyled, HeaderNavigation } = require('components/Header/Header.styled');

const AuthMenu = () => {
  return (
    <>
      <HeaderListStyled>
        <HeaderNavigation to="/login">Login</HeaderNavigation>
        <HeaderNavigation to="/register">Register</HeaderNavigation>
      </HeaderListStyled>
    </>
  );
};

export default AuthMenu;
