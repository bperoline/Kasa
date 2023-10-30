import React, { useEffect, useState } from 'react';

import aproposflechehaut from "@/assets/Images/Components/Dropdown/DropDownFlecheHaut.png"
import aproposflechebas from "@/assets/Images/Components/Dropdown/DropDownFlecheBas.png"

import "@/Components/Collapse/Collapse.css";
import "@/assets/Api/apropos.json"

const Collapse = ({ titre, description }) => {

    const [isopen, setisopen] = useState(null);
    if (isopen === null) {
        return (
            <li className='collapse' onClick={() => setisopen(true)}>
                <div className='collapse-titre'>{titre}<img className='collapse-img' src={aproposflechehaut} alt="flèche ouverte ou fermé" /></div>
            </li>);
    }

    return isopen ? (
        <li className='collapse' onClick={() => setisopen(false)}>
            <div className='collapse-titre'>{titre}<img className='collapse-img collapse-vers-bas' src={aproposflechebas} alt="flèche ouverte ou fermé" /></div>
            <div className='collapse-description'>{description}</div>
        </li>
    ) : (
        <li className='collapse' onClick={() => setisopen(true)}>
            <div className='collapse-titre'>{titre}<img className='collapse-img collapse-vers-haut' src={aproposflechehaut} alt="flèche ouverte ou fermé" /></div>
        </li>
    );
};

export default Collapse;
