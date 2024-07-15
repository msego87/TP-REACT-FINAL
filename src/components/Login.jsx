import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();

    const {email, password} = e.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((credential) =>{
      setShow(false);
      navigate('/home');
    })
    .catch((err) =>{
      const errorCode = err.code;      
      console.log(errorCode);
      setShow(true);
    })

  }

  return (
    <>
      <Container>
        <Col className='my-5'>
          <Card className='text-center mx-auto' style={{ width: '30rem' }}>
            <Card.Header as="h3">
              Login
            </Card.Header>
            <Card.Body>
              <Form className='mb-3' onSubmit={handleSubmit} action=''>
                <Form.Group className="my-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="venga ese email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" name="password" placeholder="no muestres tu contraseña" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Ingresar
                </Button>
              </Form>
                <Alert variant="warning" show={show}>Hubo un error con sus credenciales</Alert>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  )
}

export default Login