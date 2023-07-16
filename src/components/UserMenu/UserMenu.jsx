import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import { selectUsername } from 'redux/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  return (
    <>
      <p>Welcome {`${username}`}</p>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={() => dispatch(authOperations.logout())}
      >
        Logout
      </Button>
    </>
  );
};
