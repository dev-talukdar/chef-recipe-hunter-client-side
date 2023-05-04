import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const singleChef = useLoaderData()

    const { likes, name, picture, number_recipe, recipes, years_of_experience } = singleChef;
    console.log(singleChef)

    return (
        <div>
            <h2>this is chef Details page</h2>
            <img className='img-fluid' src={picture} alt="" />
            <p>{name}</p>
            <p>{number_recipe}</p>
            <p>{years_of_experience}</p>
            <p>{likes}</p>
            <div>
                {recipes.map(recipe => {
                    return (
                        <div>
                            <img className='img-fluid' src={recipe.image} alt="" />
                            <p>{recipe.id}</p>
                            <p>{recipe.name}</p>
                            <p>{recipe.rating}</p> 
                            
                            <div>
                                {recipe.ingredients.map(ingredient => {
                                    return(
                                        <div> 
                                            <p>{ingredient}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div>
                                {recipe.cooking_method.map(method => {
                                    return(
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