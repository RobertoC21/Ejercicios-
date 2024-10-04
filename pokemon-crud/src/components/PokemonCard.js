import React from "react";
import {Card, Button} from 'react-bootstrap';

const PokemonCard = ({name, imageUrl})=>{
return (
    <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant= "top" src={imageUrl} />
        <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Button variant= "primary">Detalles</Button>
        </Card.Body>
    </Card>
);
};

export default PokemonCard; 
