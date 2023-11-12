import React, { useState } from 'react';

import "@/Components/Slider/Slider.css"
import flechedroite from "@/assets/Images/Components/Gallery/GalleryArrowRight.png"
import flechegauche from "@/assets/Images/Components/Gallery/GalleryArrowLeft.png"


const Slider = ({ pictures }) => {

    const [index, setIndex] = useState(0);
    const length = pictures.length;

    const nextImage = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    };

    const prevImage = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    };

    //if (!Array.isArray(pictures) || length <= 0) {
    //    return null;
    //}

    /*return (
        <section className='slider'>
            <div className='slider-bloc'>
                <a onClick={prevImage}><img className='flechedroite' src={flechegauche} alt='fleche droite' /></a>
                <a onClick={nextImage}><img className='flechegauche' src={flechedroite} alt='fleche gauche' /></a>
                {pictures.map((img, key) => {
                    return (
                        <div className='slider-container'>
                            <div>
                                {key === index && (
                                    <img className='slider-img' src={img} alt='travel image' />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className='slider-p'>{index + 1} / {length}</p>
        </section>
    );*/

    return (
        <div className="slideshow">
            {
                pictures.length > 1 && (
                    <img className="arrowLeft" src={flechegauche} alt="flèche gauche" onClick={() => prevImage()} />
                )
            }
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {pictures.map((picture, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>

                ))}
            </div>
            {
                pictures.length > 1 && (
                    <>
                        <img className="arrowRight" src={flechedroite} alt="flèche droite" onClick={() => nextImage()} />
                        <span className="paging"> {index + 1} / {pictures.length} </span>
                    </>
                )
            }
        </div>
    );
};

export default Slider;