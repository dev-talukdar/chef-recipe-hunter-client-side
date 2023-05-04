import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 


const Login = () => {
    return (
        <div>
            <Header></Header>

            <section className="vh-100 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100 ">
                        <div className="col-md-8 col-lg-7 col-xl-6 ">
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
                                <div className=''>
                                    <h2>Please Log in </h2>
                                    
                                </div>
                                <form>
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

                                    <div className="d-flex justify-content-around align-items-center mb-4">
                                        {/* Checkbox   */}
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                            <label className="form-check-label" for="form1Example3"> Remember me </label>
                                        </div>
                                        <a href="#!">Forgot password?</a>
                                    </div>

                                    {/* Submit button   */}
                                    <button type="submit" className="btn btn-primary btn-lg btn-block align-items-center justify-content-center">Please Sign in</button>

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>                                    
                                    <div>
                                        <Button className="btn btn-primary btn-lg btn-block mb-3"><FaGoogle/> Continue with Google</Button>
                                        <Button className="btn btn-primary btn-lg btn-block"><FaGithub/> Continue with Github</Button>
                                        <p className='mt-3'>New to this website ? <Link to={'/registration'}>Please Register</Link></p>
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