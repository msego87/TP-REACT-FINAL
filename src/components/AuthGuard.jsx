import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AuthGuard = () => {

    const {user} = useContext(UserContext);
    console.log(user);

  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}

export default AuthGuard