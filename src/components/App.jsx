import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUserThunk } from '../redux/dataUser/userThunk';
import Navigation from '../components/Navigation/Navigation';
import { PublicRoute } from '../components/Public/PublicRoute';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import { PrivateRoute } from './Private/PrivateRoute';
import Contacts from '../pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: '50px',
        fontSize: 20,
        color: '#010101',
      }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;