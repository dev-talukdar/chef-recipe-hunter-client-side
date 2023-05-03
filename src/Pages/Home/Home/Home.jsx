import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import bannerImg from '../../../assets/bannerImg.png'

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <Container className='mt-5'>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 style={{ fontSize: "65px" }} className='text-center mb-4 mb-md-0'>Cooking <br /> is <br /> like love </h1>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center justify-content-md-end align-items-center'>
                        <img className='img-fluid' style={{ width: "" }} src={bannerImg} alt="" />
                    </div>
                </div>

                <div className=' d-flex mt-5 gap-4'>

                    <div>
                        {
                            chefs.map(chef => <p
                            key={chef.id}
                            >  
                            <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Title>{chef.name}</Card.Title>
                            <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>

                            </Card>


                            </p>)  
                        }
                    </div> 

                    

                </div>

            </div>
        </Container>
    );
};

export default Home;