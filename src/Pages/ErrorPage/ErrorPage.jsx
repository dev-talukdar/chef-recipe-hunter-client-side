import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div>
        <Header></Header>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        className="img-fluid"/>
                </div>
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                     <Button variant="primary" className='primary text-white fs-5'><Link className='text-white fs-5 text-decoration-none ' to="/"  >
						Back to Home
					</Link></Button>
                </div>

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;