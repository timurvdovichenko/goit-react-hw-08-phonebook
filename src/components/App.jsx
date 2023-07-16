import React, { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import { HomePage } from 'pages/HomePage';
import { RestrictedRoute } from './RestrictedRoute';

const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          {/* <Route path="contacts" element={<Contacts />} /> */}
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
          />
          {/* <Route path="login" element={<Login />} /> */}
          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
          />
          {/* 
          <Route path="register" element={<Register />} /> */}

          <Route
            path="register"
            element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
};

// export default App;
