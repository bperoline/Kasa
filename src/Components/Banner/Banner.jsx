import React from 'react';

import "@/Components/Banner/Banner.css";

const Banner = ({ image, texte }) => {
    return (
        <div className='banner'>
            <img className='banner-img' src={image} alt="bannière de l'accueil" />
            <div className='banner-sombre'></div>
            <h1>{texte}</h1>
        </div>
    );
};

export default Banner;