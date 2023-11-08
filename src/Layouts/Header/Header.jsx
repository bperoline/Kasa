import React from 'react';
import { NavLink } from 'react-router-dom';

import '@/Layouts/Header/Header.css';

const Header = ({ image }) => {
    return (
        <div className='header'>
            <img className="header-image" src={image} alt="Kasa" />
            <ul className='header-ul'>
                <li className='header-li'><NavLink to="Accueil"> Accueil </NavLink></li>
                <li className='header-li'><NavLink to="Apropos"> A propos</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;