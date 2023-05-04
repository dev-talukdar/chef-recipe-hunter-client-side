import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => { 

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

            })
            .catch(error => {

            })

        console.log(email)

    }


    return (
        <div>
            <NavigationBar></NavigationBar>

            <section className="vh-100 border border-warning border-1 mb-5 rounded bg-light mt-5 px-5 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100 ">
                        <div className="col-md-8 col-lg-7 col-xl-6 ">
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
                                <div className=''>
                                    <h2>Please Log in </h2>

                                </div>
                                <form onSubmit={handleLogIn}>
                                    

                                    {/* Email input  */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" name='email' placeholder='Your Email' className="form-control form-control-lg" />
                                        <label className="form-label" for="form1Example13">Email address</label>
                                    </div>

                                    {/* Password input  */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" name='password' placeholder='Your Password' className="form-control form-control-lg" />
                                        <label className="form-label" for="form1Example23">Password</label>
                                    </div>   



                                    {/* Submit button   */}
                                    <button type="submit" className="btn btn-primary btn-lg btn-block align-items-center justify-content-center mb-3">Login</button>

                                    <div>
                                    <button onClick={handleGoogleSignIn} type="submit" className="btn btn-primary btn-lg btn-block align-items-center justify-content-center mb-3"><FaGoogle></FaGoogle> Continue with Google</button>
                                    <button onClick={handleGithubSignIn} type="submit" className="btn btn-primary btn-lg btn-block align-items-center justify-content-center mb-3"><FaGithub></FaGithub>Continue with Github</button>
                                    </div>


                                    <div>
                                        <p className='mt-3'>New to this website? <Link to={'/registration'}>Please Register</Link></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Login;