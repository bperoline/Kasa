import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "@/Pages/Public/Fiche-logement/Fichelogement.css";
import LogementService from "@/_Services/Logement.service.jsx";

import Slider from "@/Components/Slider/Slider.jsx"
import Tag from "@/Components/Tag/Tag.jsx"
import Collapse from "@/Components/Collapse/Collapse.jsx"
import Profil from "@/Components/Profil/Profil.jsx"
import Stars from "@/Components/Stars/Stars.jsx"




const Fichelogement = () => {

    const [logement, setlogement] = useState({})
    const [loader, setloader] = useState(true);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        Logementinfo();
    }, [])

    const Logementinfo = async () => {
        await LogementService.GetOneLogement(id)
            .then((response) => {
                if (response) {
                    setlogement(response);
                    setloader(false)
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => console.log(error))
    }

    const displayequipement = (equipements) => {
        if (equipements) {
            return (
                <ul>
                    {
                        equipements.map((value, index) => {
                            return (
                                <li key={index}>{value}</li>
                            )
                        })
                    }
                </ul>
            )
        }
    }


    if (loader) return (<h2>Chargement..</h2>)

    return (

        <section className='fichelogement'>
            <Slider pictures={logement.pictures} />
            <ul className='fichelogement-ul'>


                <div> {logement.title} </div>
                <div> {logement.location}</div>
                <div className='tag'>
                    {logement.tags.map((data, id) => {
                        return <Tag unTag={data} />
                    })}
                </div>

                <Profil identite={logement.host.name} image={logement.host.picture} />
                <Stars note={logement.rating} />
                <Collapse titre="Description" description={logement.description} liste={false} />
                <Collapse titre="Equipements" description={displayequipement(logement.equipments)} liste={true} />

            </ul>
        </section >
    )

};

export default Fichelogement;