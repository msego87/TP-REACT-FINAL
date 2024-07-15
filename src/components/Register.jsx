import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (e) => {

    e.preventDefault();
    const { nombre, apellido, email, password } = e.target.elements;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    const mail = email.value;
    const pass = password.value;

    createUserWithEmailAndPassword(auth, mail, pass)
      .then((credential) => {
        const user = credential.user;
        setShow(false);
        navigate('/login');
      })
      .catch((err) => {
        const errorCode = err.code;
        let errorMessage = err.message;

        if (errorCode === 'auth/weak-password') {
          errorMessage = 'La constraseña debe tener por lo menos 6 caracteres';
        }

        setShow(true);
        setMessage(errorMessage)
      })
  }

  return (
    <Container >
      <Col className='my-5'>
        <Card bg="dark" data-bs-theme="dark" className='text-center mx-auto' style={{ width: '30rem' }}>
          <Card.Header as="h3">
            Registrarse
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} action="">
              <Form.Group className="my-3" controlId="formBasicNombre">
                <Form.Label as="h5">Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Ej. Martin"  />
              </Form.Group>
              <Form.Group className="my-3" controlId="formBasicApellido">
                <Form.Label as="h5">Apellido</Form.Label>
                <Form.Control type="text" name="apellido" placeholder="Ej. Segovia"  />
              </Form.Group>
              <Form.Group className="my-3" controlId="formBasicEmail" required >
                <Form.Label as="h5">Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="pirulo@opa.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label as="h5">Contraseña</Form.Label>
                <Form.Control type="password" name="password" placeholder="al menos 6 caracteres..." required />
              </Form.Group>
              <Alert variant="danger" show={show}> {message} </Alert>
              <Button variant="primary" type="submit">
                Registrarse
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  )
}

export default Register