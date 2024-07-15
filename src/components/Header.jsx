import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from './Logout';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Header = () => {

  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        {user ? (
            <>
              <Navbar.Brand> <h4>Home</h4> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">                
                </Nav>
                <Nav>
                  <Logout />
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Navbar.Brand href='/login'>Login</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/register">Registrar</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )
        }
      </Container>
    </Navbar>
  )
}

export default Header