import React, { useContext } from 'react'; 
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { Button, Form } from "react-bootstrap"; 

const Register = () => {



    const { customRegister } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value; 
        const name = e.target.name.value; 
        const photoUrl = e.target.photoUrl.value; 

        customRegister(email, password)
            .then(result => {
                console.log(result)

            })
            .catch(error => {

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
                  <Form.Control  type="text" id="name" name='name' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control  type="email" id="email" name='email' placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" id="password" name='password' placeholder="Enter Password" required />
                </Form.Group> 

                <Form.Group className="mb-3">
                  <Form.Label>Photo Url</Form.Label>
                  <Form.Control  type="text" id="photoUrl" name='photoUrl' placeholder="Photo URL" required />
                </Form.Group>

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