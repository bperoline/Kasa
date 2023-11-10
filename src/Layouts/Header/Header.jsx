import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '@/Layouts/Header/Header.css';

const Header = ({ image }) => {

    const location = useLocation();

    return (
        <div className='header'>
            <img className="header-image" src={image} alt="Kasa" />
            <ul className='header-ul'>
                <li className={`header-li ${location.pathname === '/Accueil' ? 'header-active' : ''}`}><NavLink to="Accueil"> Accueil </NavLink></li>
                <li className={`header-li ${location.pathname === '/Apropos' ? 'header-active' : ''}`}><NavLink to="Apropos"> A propos</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;