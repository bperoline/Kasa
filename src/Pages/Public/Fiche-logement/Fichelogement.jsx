import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "@/Pages/Public/Fiche-logement/Fichelogement.css";
import LogementService from "@/_Services/Logement.service.jsx";


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

    if (loader) return (<h2>Chargement..</h2>)

    return (

        <section className='fichelogement'>

            <ul className='fichelogement-ul'>
                ficheloge
            </ul>
        </section >
    )





    /*let { logementid } = useParams()
    console.log(logementid)
        < section className = 'Fichelogement' >
            <ul className='acceuil-ul'>
                {
                    LogementService.GetOneLogement(id)


                }
            </ul>

        </ >*/
};

export default Fichelogement;