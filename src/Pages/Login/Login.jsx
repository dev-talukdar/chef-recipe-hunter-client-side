import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [loginError, setLoginError] = useState('')
  const [loginSuccess, setLoginSuccess] = useState('')


  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error => {
        console.log('error', error.message)
      })

  }

  const { customLogin } = useContext(AuthContext)

  const handleLogIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    customLogin(email, password)
      .then(result => {
        console.log(result)
        e.target.reset();
        setLoginSuccess('You have logged in successfully')
        setLoginError('')

      })
      .catch(error => {
        console.log('error', error.message)

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
                <Form onSubmit={handleLogIn}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" name='email' placeholder="Enter email" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" name='password' required />
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Check type="checkbox" label="Remember me" />
                    <a href="/">Forgot password?</a>
                  </div>

                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Log In
                  </Button>
                </Form>

                <div className='text-center'> 
                    <p><small className='text-success '>{loginSuccess}</small></p>
                  </div>

                <div className="text-center mb-3">
                  <span>Don't have an account? </span>
                  <Link to={'/registration'}>Please Register</Link>
                </div>

                <hr />

                <div className="d-grid gap-2">
                  <Button onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle className="me-2"></FaGoogle>
                    Continue with Google
                  </Button>
                  <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub className="me-2"></FaGithub>
                    Continue with Github
                  </Button>
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

export default Login;