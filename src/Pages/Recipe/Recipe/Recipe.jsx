import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Recipe = ( ) => { 

    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-side-dev-talukdar.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipe(data))
            .catch(error => console.error(error))
    }, [])
    console.log(recipe)

    return (
        <div>
            <Card>
                 <Card.Img className='img-fluid rounded' variant="top"  />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Button></Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Recipe;