import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import { UserContext } from './context/UserContext';
import { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    })
  }, [])

  return (
    <>
      <Header/>
      <Outlet></Outlet>
    </>
  )
}

export default App
