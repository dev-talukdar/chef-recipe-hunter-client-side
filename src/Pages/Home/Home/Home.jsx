import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import bannerImg from '../../../assets/bannerImg.png'
import { Link } from 'react-router-dom';

const Home = (chef) => { 
    const { id, title, details, image_url, thumbnail_url, author, total_view, rating } = chef;
    const [chefs, setChefs] = useState([]);
    const [ShowAll, setShowAll] = useState(false);
    const handleShowAll = () => {
		setShowAll(true);
	};

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-side-dev-talukdar.vercel.app/chef')
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
                                    <Card.Img className='img-fluid rounded' variant="top" src={chef.picture} />
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fs-1'>{chef.name}</Card.Title>
                                        <p>{chef.years_of_experience} Years of experience</p>
                                        <p>Numbers of recipes: {chef.number_recipe}</p>
                                        <p>Likes: {chef.likes}</p>
                                        <Button variant="primary text-white fs-5"><Link className='text-decoration-none text-white' to={`/chef/${id}`}>View Recipes</Link></Button>
                                    </Card.Body>
                                </Card>
                            </p>)
                        }
                    </div>   
                    {chefs.slice(0, ShowAll ? 9 : 6).map((chef) => (
					<chef key={chef.id} 
                    chef={chef}></chef>
				))}                 
                </div>
                
            </div>
            {!ShowAll && (
				<span
					onClick={handleShowAll}
					
				>
                    <div className=" mt-5 mb-5 text-center"> 
					<Button variant="primary" className='primary text-white fs-5'>See All Recipe</Button>
                    </div>
				</span>
			)}
        </Container>
    );
};

export default Home;