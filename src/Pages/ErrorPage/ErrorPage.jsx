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
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center row">
                <div class=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        class="img-fluid"/>
                </div>
                <div class=" col-md-6 mt-5">
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p class="lead">
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