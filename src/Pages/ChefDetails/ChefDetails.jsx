import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const singleChef = useLoaderData()

    const { likes, name, picture, number_recipe, recipes, years_of_experience } = singleChef;
    console.log(singleChef)

    return (
        <div>



            <img className='img-fluid' src={picture} alt="" />
            <h2 className='text-center mt-5 mb-5' >--- {name} --- </h2>
            <div>
                {recipes.map(recipe => {
                    return (
                        <div className='d-flex justify-content-between align-items-center row row-cols-3 border border-secondary border-1 mb-5 rounded bg-light'>
                            

                            <Card className='mb-5 mt-5' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={recipe.image} />
                                <Card.Body>
                                    <Card.Title>{recipe.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <p>Rating: {recipe.rating}</p>
                                </Card.Body>
                            </Card>

                             
                            {/* <p>{recipe.id}</p>  */}
                            

                            <div className='text-center'>
                                <h4 className='text-uppercase'>Ingredients:</h4>
                                {recipe.ingredients.map(ingredient => {
                                    return (
                                        <div>
                                            <p>{ingredient}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className='text-center px-5'>
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

                    )
                })}
            </div>
        </div>
    );
};

export default ChefDetails;