import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Recipe = (recipe) => {
    const { id, title, details, image, thumbnail_url, author, total_view, rating } = recipe;

    useEffect(() => {
        fetch('http://localhost:5000/recipe')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <Card>
                 <Card.Img className='img-fluid rounded' variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Button></Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Recipe;