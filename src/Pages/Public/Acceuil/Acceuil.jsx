import React from 'react';

import "@/Pages/Public/Acceuil/Acceuil.css";

import { NavLink } from 'react-router-dom';

import bannerImg from "@/assets/Images/Pages/Background1.png";
import Banner from "@/Components/Banner/Banner.jsx";

import Card from "@/Components/Card/Card.jsx"

import LogementService from "@/_Services/Logement.service.jsx";


const Acceuil = () => {
    return (
        <section className='home'>
            <Banner image={bannerImg} texte="Chez vous, partout et ailleurs" />
            <ul className='acceuil-ul'>
                {
                    LogementService.GetAllLogement().map((logement) =>
                        < NavLink key={logement.id} to={"/Fichelogement/" + logement.id + "/#"} >
                            <Card key={logement.id} image={logement.cover} titre={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section >
    );
};

export default Acceuil;