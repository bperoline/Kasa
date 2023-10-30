import React from 'react';

import '@/Layouts/Footer/Footer.css';

const Footer = ({ image }) => {
    return (

        <div className='footer'>
            <img className="footer-image" src={image} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>

    );
};

export default Footer;