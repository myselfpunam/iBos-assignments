import React from 'react';
import './Login.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  return (
    <Container fluid className=" d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col md={6} className="d-flex pt-5 justify-content-center align-items-center">
          <div className="form-container p-4">
            <h3 className='text-start'>Welcome Back!</h3>
            <p className='text-start'>Enter your credentials to access your account</p>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label className="d-block text-start">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label className="d-block text-start">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <div className="text-end">
                <a href="#" className=" text-decoration-none">Forgot Password?</a>
              </div>
              <div className='d-flex'>
                <Form.Check type="checkbox" />
                <p className='ms-3'>I agree to the <a href="">Terms & Policy</a></p>
              </div>
              <Button className="w-100 mt-3" variant="dark" type="submit">Sign In</Button>
              <div className="text-center mt-3">or</div>
              <Button className="w-100 mt-2" variant="outline-dark">
                <i className="fab fa-google"></i> Sign in with Google
              </Button>
              <Button className="w-100 mt-2" variant="outline-dark">
                <i className="fab fa-apple"></i> Sign in with Apple
              </Button>

              <p className="mt-3 text-center">
                Don't have an account? <a href="#" className="text-decoration-none">Sign Up</a>
              </p>
            </Form>
          </div>
        </Col>

        <Col md={6} className="picture-container d-none d-md-block">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-center text-white">
              <h2>FurniFlex</h2>
              <p>Discover a seamless shopping experience with our curated collection of products.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;