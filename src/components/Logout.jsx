import Button from 'react-bootstrap/Button';
import { auth } from '../firebase';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Logout = () => {

  const {setUser} = useContext(UserContext);
  const signout = () => {
    auth.signOut()
    .then(() => {
        setUser(null);
    })
    .catch(
        err => console.log('Error logout')
    )
  }

  return (
    <Button onClick={signout} variant="outline-secondary">Salir</Button>
  )
}

export default Logout