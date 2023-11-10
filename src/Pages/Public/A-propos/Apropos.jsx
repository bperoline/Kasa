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
                            < NavLink key={apropos} to={"/Apropos/" + "/#"} >
                                <Collapse key={apropos} titre={apropos.titre} description={apropos.description} liste={false} />
                            </NavLink>
                        )
                    }
                </ul>
            </section >
        </div>
    );
};

export default Apropos;





/*



let suppression = document.querySelectorAll(".deleteItem")
                suppression.forEach((item) => {
                    item.addEventListener('click', (event) => {
                        suppLigneCommande(event)

                        majDomQttPrix()
                        quantiteProduitPrixTotal()
                    })
                })



    
                window.addEventListener('click', (event) => {
        console.log(event)
    });
window.addEventListener('onclick', (event) => {

});
let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
    } else {
        d1.style.display = "block";
    }
})

function togg() {
    if (getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
    } else {
        d2.style.display = "block";
    }
};
togg2.onclick = togg;*/
