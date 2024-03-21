import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LanguageColor from './Languagecolor';
import db from '../db.json';

const CardCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <div className="center">
                <Slider {...settings}>
                    {Object.values(db).map(projet => (
                        <div key={projet.nom} className="card">
                            <img src={projet.image} alt={projet.nom} />
                            <h2>{projet.nom}</h2>
                            <em>{projet.description}</em>
                            <div className="languages">
                            <LanguageColor language={projet.langages} />
                            </div>
                            <div className="links">
                                <a href={projet.lien_github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={projet.lien_site} target="_blank" rel="noopener noreferrer">Site Web</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CardCarousel;
