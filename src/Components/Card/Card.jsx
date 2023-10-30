import React from 'react';

import "@/Components/Card/Card.css";

const Card = ({ image, titre }) => {
    return (
        <li className="card">
            <img className="card-image" src={image} alt="Card" />
            <div className="card-sombre"></div>
            <h2 className="card-titre">{titre}</h2>
        </li>
    );
};

export default Card;