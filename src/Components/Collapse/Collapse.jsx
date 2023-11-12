import React, { useState } from 'react';

import flechehaut from "@/assets/Images/Components/Dropdown/DropDownFlecheHaut.png"
import flechebas from "@/assets/Images/Components/Dropdown/DropDownFlecheBas.png"

import "@/Components/Collapse/Collapse.css";

const Collapse = ({ className, titre, description, liste }) => {

    const [isopen, setisopen] = useState(null);

    if (isopen === null) {
        return (
            <li className='collapse' onClick={() => setisopen(true)}>
                <div className='collapse-titre'>
                    <h2 className='collapse-h2'>{titre}</h2>
                    <img className='collapse-img' src={flechebas} alt="flèche ouverte ou fermé" />
                </div>
            </li>);
    }

    return isopen ? (
        <li className='collapse' onClick={() => setisopen(false)}>
            <div className='collapse-titre'>
                <h2 className='collapse-h2'>{titre}</h2>
                <img className='collapse-img collapse-img-vers-bas' src={isopen ? flechehaut : flechebas} alt="flèche ouverte ou fermé" />
            </div>
            {
                isopen && (liste ? <div className={`collapse-description collapse-description-bas ${className}`}>{description}</div> : <div className={`collapse-description collapse-description-bas ${className}`}><p>{description}</p></div>)
            }
        </li>
    ) : (
        <li className='collapse' onClick={() => setisopen(true)}>
            <div className='collapse-titre'>
                <h2 className='collapse-h2'>{titre}</h2>
                <img className='collapse-img collapse-img-vers-haut' src={isopen ? flechehaut : flechebas} alt="flèche ouverte ou fermé" />
            </div>
        </li>
    )


    /*if (!liste) {

        if (isopen === null) {
            return (
                <li className='collapse' onClick={() => setisopen(true)}>
                    <div className='collapse-titre'><h2>{titre}</h2><img className='collapse-img' src={flechehaut} alt="flèche ouverte ou fermé" /></div>
                </li>);
        }

        return isopen ? (
            <li className='collapse' onClick={() => setisopen(false)}>
                <div className='collapse-titre'><h2>{titre}</h2><img className='collapse-img collapse-vers-bas' src={flechebas} alt="flèche ouverte ou fermé" /></div>
                <div className='collapse-description'><p>{description}</p></div>
            </li>
        ) : (
            <li className='collapse' onClick={() => setisopen(true)}>
                <div className='collapse-titre'>{titre}<img className='collapse-img collapse-vers-haut' src={flechehaut} alt="flèche ouverte ou fermé" /></div>
            </li>
        );
    } else {
        if (isopen === null) {
            return (
                <li className='collapse' onClick={() => setisopen(true)}>
                    <div className='collapse-titre'><h2>{titre}</h2><img className='collapse-img' src={flechehaut} alt="flèche ouverte ou fermé" /></div>
                </li>);
        }

        return isopen ? (
            <li className='collapse' onClick={() => setisopen(false)}>
                <div className='collapse-titre'><h2>{titre}</h2><img className='collapse-img collapse-vers-bas' src={flechebas} alt="flèche ouverte ou fermé" /></div>
                <ul className='collapse-description'><li>{description}</li></ul>
            </li>
        ) : (
            <li className='collapse' onClick={() => setisopen(true)}>
                <div className='collapse-titre'><h2>{titre}</h2><img className='collapse-img collapse-vers-haut' src={flechehaut} alt="flèche ouverte ou fermé" /></div>
            </li>
        );
    }*/
};

export default Collapse;
