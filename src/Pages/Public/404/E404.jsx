import React from 'react';
import { NavLink } from 'react-router-dom';

import "@/Pages/Public/404/E404.css";

const E404 = () => {
    return (
        <section className='e404-section'>
            <p className='e404'>
                404
            </p>

            <p className='e404-erreur'>
                Oups! La page que vous demandez n'existe pas.
            </p>

            <div className='e404-lien'>
                <NavLink to="Accueil">Retourner sur la page d’accueil</NavLink>
            </div>

        </section>
    );
};

export default E404;