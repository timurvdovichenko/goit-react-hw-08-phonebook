import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSlice';
import { UserMenu } from '../UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

const { Suspense } = require('react');
const {
  HeaderStyled,
  HeaderNavigation,
  HeaderListStyled,
  HeaderItemListStyled,
} = require('./Header.styled');
const { Outlet } = require('react-router-dom');
const { default: Loader } = require('components/Loader/Loader');

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <HeaderStyled>
        <HeaderListStyled>
          <HeaderItemListStyled>
            <HeaderNavigation to="/home">Home</HeaderNavigation>
          </HeaderItemListStyled>
          {isLoggedIn && (
            <HeaderItemListStyled>
              <HeaderNavigation to="/contacts">Contacts</HeaderNavigation>
            </HeaderItemListStyled>
          )}
        </HeaderListStyled>
        {!isLoggedIn && <AuthMenu />}
        {isLoggedIn && <UserMenu />}
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Header;
