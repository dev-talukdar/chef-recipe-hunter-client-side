import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

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
            <section className=" border border-warning border-1 mb-5 rounded bg-light mt-5 px-5">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100 ">
                        <div className="col-md-8 col-lg-7 col-xl-6 ">
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 ">
                                <div className=''>
                                    <h2>Please Sign Up </h2>

                                </div>
                                <form onSubmit={handleRegister}>
                                    Name input 
                                    <div className="form-outline mb-4">
                                        <input type="text" id="name" name='name' placeholder='Your Name' className="form-control form-control-lg" />
                                        <label className="form-label" for="form1Example13">Full Name</label>
                                    </div>

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

                                    Photo url input 
                                    <div className="form-outline mb-4">
                                        <input type="text" id="photoUrl" name='photoUrl' placeholder='Photo Url' className="form-control form-control-lg" />
                                        <label className="form-label" for="form1Example23">Photo Url</label>
                                    </div>



                                    {/* Submit button   */}
                                    <button type="submit" className="btn btn-primary btn-lg btn-block align-items-center justify-content-center">Register</button>


                                    <div>
                                        <p className='mt-3'>Have an existing Account? <Link to={'/login'}>Please Login</Link></p>
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

export default Register;