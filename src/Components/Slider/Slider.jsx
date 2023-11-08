import React, { useState } from 'react';

import "@/Components/Slider/Slider.css"
import flechegauche from "@/assets/Images/Components/Gallery/GalleryArrowRight.png"
import flechedroite from "@/assets/Images/Components/Gallery/GalleryArrowLeft.png"


const Slider = ({ pictures }) => {

    // const [index, setIndex] = useState(0);

    // const nextImage = () => {
    //     setIndex((prevIndex) => prevIndex + 1 === pictures.length ? 0 : prevIndex + 1)
    // }

    // const lastImage = () => {
    //     setIndex((prevIndex) => prevIndex - 1 === pictures.length ? 0 : prevIndex - 1)
    // }

    // return (
    //     <div>

    //     </div>
    // );


    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(pictures) || length <= 0) {
        return null;
    }


    return (
        <section className='slider'>
            <a onClick={prevSlide}><img className='flechedroite' src={flechedroite} alt='fleche droite' /></a>
            <a onClick={nextSlide}><img className='flechegauche' src={flechegauche} alt='fleche gauche' /></a>
            {pictures.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
            <p>{current} sur {length}</p>
        </section>
    );
};

export default Slider;