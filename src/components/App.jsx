import Layout from './Layout/Layout';
import Home from '../pages/Home';
import ContactsPage from '../pages/Contacts';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import authOperation from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/phonebook-app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            restricted
            element={
              <PublicRoute restricted>
                <LoginForm />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
