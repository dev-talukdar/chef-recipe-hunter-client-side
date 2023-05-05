import React, { useContext, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Button, Form } from "react-bootstrap";

const Register = () => {
  const { customRegister } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState(' ')
  const [success, setSuccess] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    setSuccess('')
    setRegisterError('')

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    // validation  
    
    if(!/(?=.*[A-Z])/.test(password)){
      setRegisterError('Please use at least one capital letter');
      return;
    }
    else if(!/(?=.*[0-9])/.test(password)){
      setRegisterError('Please use at least one number');
      return;
    }
    else if(password.length < 6){
      setRegisterError('Please use at least 6 character to set your password');
      return;
    }



    customRegister(email, password, name, photoUrl)
      .then(result => {
        setRegisterError('')
        e.target.reset();
        setSuccess('Thank you for registration, please Log in now')

      })
      .catch(error => {
        console.log('error', error.message)
        setRegisterError(error.message)


      })

    console.log(email)

  }

  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="container-fluid bg-light">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-center">Log In</h3>
                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" id="name" name='name' placeholder="Enter Your Name" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" name='email' placeholder="Enter Email" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" name='password' placeholder="Enter Password" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" id="photoUrl" name='photoUrl' placeholder="Photo URL" required />
                  </Form.Group>
                  <div className='text-center'>
                    <p><small className='text-danger '>{registerError}</small></p>
                    <p><small className='text-success '>{success}</small></p>
                  </div>

                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Register
                  </Button>
                </Form>


                <div className="text-center mb-3">
                  <span>Have an existing account? </span>
                  <Link to={'/login'}>Please Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer></Footer>
    </div>
  );
};

export default Register;