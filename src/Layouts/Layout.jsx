import React from 'react';

import '@/Layouts/Layout.css';

import Header from "@/Layouts/Header/Header.jsx";
import headerImg from "@/assets/Images/Logo.png";

import Footer from "@/Layouts/Footer/Footer.jsx";
import footerImg from '@/assets/Images/LogoFooter.png';

import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className='layout'>
            <Header image={headerImg} />
            <main>
                <Outlet />
            </main>
            <Footer image={footerImg} />
        </div>
    );
};

export default Layout;