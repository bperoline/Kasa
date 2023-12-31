import React from 'react';

import "@/Components/Stars/Stars.css"
import orange from "@/assets/Images/Components/Stars/StarsOrange.png"
import gris from "@/assets/Images/Components/Stars/StarsWhite.png"

const Stars = ({ note }) => {

    return (
        <div className='stars'>
            {
                [...Array(5)].map((etoile, index) => {
                    if (index + 1 > note) {
                        return (
                            <img className='star' src={gris} alt='stars' key={index} />
                        )
                    } else {
                        return (
                            <img className='star' src={orange} alt='stars' key={index} />
                        )
                    }
                })
            }
        </div>
    )
};

export default Stars;