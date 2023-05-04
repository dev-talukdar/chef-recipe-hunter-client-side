import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.jpg'

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

    const [showAllChefs, setShowAllChefs] = useState(false);

    // Define a function to toggle the showAllChefs state variable
    const handleShowAllChefsToggle = () => {
        setShowAllChefs(!showAllChefs);
    };

    return (
        <div className="mt-5">
            <div className="d-flex align-items-center justify-content-center h-100 mb-5">
  <div className="container-fluid banner" style={{backgroundImage: `url(${banner})`, height: '400px', backgroundSize: 'cover'}}>
    <div className="d-flex flex-column justify-content-center align-items-start  h-100">
      <p className='lh-1 fs-2 text-dark fw-bold'>Cooking is like love It  <br />should be entered into <br />with abandon or not at all</p>
      <div className="text-start">
      <button type="button" class="btn btn-outline-dark fw-bold">Let's Explore</button>
      </div>
    </div>
  </div>
</div>

            <div>
                {chefs.slice(0, ShowAll ? chefs.length : 6).map((chef) => (
                    <p key={chef.id}>
                        <Card bg='light mb-5' text='dark'>
                            <Card.Img variant="top" src={chef.picture} />
                            <Card.Body className='px-4'>
                                <Card.Title className='fs-1 mb-4'>{chef.name}</Card.Title>
                                <div className='d-flex justify-content-between mb-4'>
                                    <div>
                                        <p className='m-0'>{chef.years_of_experience} Years of experience</p>
                                        <p className='m-0'>Numbers of recipes: {chef.number_recipe}</p>
                                    </div>
                                    <div>
                                        <p className='m-0'>Likes: {chef.likes}</p>
                                    </div>
                                </div>
                                <Button variant="primary" className='w-100 fs-5'>
                                    <Link className='text-decoration-none text-white' to={`/chef/${chef.id}`}>View Recipes</Link>
                                </Button>
                            </Card.Body>
                        </Card>

                    </p>
                ))}
            </div>
            <Button variant="info" className='w-100 fs-5 mb-5 text-white fw-bold' onClick={() => setShowAll(!ShowAll)}>
                {ShowAll ? "Show Less Chefs" : "Show All Chefs"}
            </Button>
            {showAllChefs && (
                <>
                    {chefs.slice(6, 9).map((chef) => (
                        <Card key={chef.id}>
                            <Card.Img className="img-fluid" variant="top" src={chef.picture} />
                            <Card.Body className="text-center">
                                <Card.Title className="fs-1">{chef.name}</Card.Title>
                                <p>{chef.years_of_experience} Years of experience</p>
                                <p>Numbers of recipes: {chef.number_recipe}</p>
                                <p>Likes: {chef.likes}</p>
                                <Button variant="primary text-white fs-5">
                                    <Link className="text-decoration-none text-white" to={`/chef/${chef.id}`}>
                                        View Recipes
                                    </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button variant="primary text-white fs-5" onClick={handleShowAllChefsToggle}>
                        Hide Chefs
                    </Button>
                </>
            )}
        </div>
    );
}

export default Home;