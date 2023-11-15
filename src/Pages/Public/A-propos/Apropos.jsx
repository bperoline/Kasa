import React from 'react';

import "@/Pages/Public/A-propos/Apropos.css";

import bannerImg from "@/assets/Images/Pages/Background2.png";
import Banner from "@/Components/Banner/Banner.jsx";


import AproposService from "@/_Services/Apropos.service.jsx";
import { NavLink } from 'react-router-dom';
import Collapse from "@/Components/Collapse/Collapse.jsx"


const Apropos = () => {

    return (
        <div>
            <section className='apropos'>
                <Banner image={bannerImg} />
                <ul className='apropos-ul'>
                    {
                        AproposService.GetAllApropos().map((apropos) =>
                            < NavLink key={apropos.id} to={"/Apropos"} >
                                <Collapse key={apropos.id} titre={apropos.titre} description={apropos.description} liste={false} />
                            </NavLink>
                        )
                    }
                </ul>
            </section >
        </div>
    );
};

export default Apropos;