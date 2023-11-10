import React from 'react';

import "@/Components/Profil/Profil.css";

const Profil = ({ identite, image }) => {
    return (
        <div className='profil-div'>
            <p className='profil-name'>{identite}</p>
            <img className='profil-img' src={image} alt="Photo du profil" />
        </div>
    );
};

export default Profil;