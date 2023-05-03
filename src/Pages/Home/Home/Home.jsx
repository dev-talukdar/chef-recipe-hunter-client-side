import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import bannerImg from '../../../assets/bannerImg.png'

const Home = () => {
    return (
        <Container className='mt-5'>
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                <h1 style={{ fontSize: "65px" }} className='text-center mb-4 mb-md-0'>Cooking <br /> is <br /> like love </h1>
                </div>
                <div className='col-md-6 d-flex justify-content-center justify-content-md-end align-items-center'>
                <img className='img-fluid' style={{ width: "450px" }} src={bannerImg} alt="" />
                </div>
            </div>

            <div className=' d-flex mt-5 gap-4'>

                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>

        </div>
        </Container>
    );
};

export default Home;