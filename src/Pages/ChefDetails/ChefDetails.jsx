import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';

const ChefDetails = () => {

    const favorite = () => {
        toast(`This recipe is your favorite`)
    }

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success("Added to favorites!", {
            onClose: () => setIsFavorite(false)
        });
    }

    const singleChef = useLoaderData()

    const { likes, name, picture, number_recipe, recipes, years_of_experience } = singleChef;
    console.log(singleChef)

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='border border-secondary border-1 mb-5 rounded bg-light mt-5 container'>
                <img className='img-fluid' src={picture} alt="" />
                <h4 className='text-center mt-5 ' >  {name}  </h4>
                <h4 className='text-center ' >Number of Recipe: {number_recipe}</h4>
                <h4 className='text-center ' >  {years_of_experience} Years of Experience </h4>
                <h4 className='text-center ' > <FaThumbsUp></FaThumbsUp>  {likes} </h4>
            </div>

            <div className='container'>
                {recipes.map(recipe => {
                    return (
                        <div className='border border-secondary border-1 mb-5 rounded bg-light'>
                            <div className='row'>
                                <div className='col-md-4 col-lg-4 my-auto'>
                                    <Card className='mb-3'>
                                        <Card.Img variant="top" src={recipe.image} />
                                        <Card.Body>
                                            <Card.Title>{recipe.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </Card.Text>
                                            <p>Rating: {recipe.rating}</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-md-4 col-lg-3 my-auto  '>
                                    <div className='text-center '>
                                        <h4 className='text-uppercase'>Ingredients:</h4>
                                        {recipe.ingredients.map(ingredient => {
                                            return (
                                                <div>
                                                    <p>{ingredient}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='col-md-4 col-lg-5 p-3 '>
                                    <div className='text-center'>
                                        <h4 className='text-uppercase'>Cooking:</h4>
                                        {recipe.cooking_method.map(method => {
                                            return (
                                                <div>
                                                    <p>{method}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="d-grid col-6 mx-auto mb-3">
        <Button onClick={handleFavoriteClick} disabled={isFavorite} className="text-center">
          <FaHeart className="fs-5 me-2" />
          Favorite
        </Button>
      </div>
      <ToastContainer />
                        </div>
                    )
                })}
            </div>


<Footer></Footer>
        </div>
    );
};

export default ChefDetails;