// Background.js

import React, { useEffect } from 'react';
import '../styles/components/_background-styles.scss';

const Background = () => {
    const setBackground = document.querySelector("body");

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 120; i++) {
            // Vous pouvez ajuster le nombre d'étoiles ici
            const style = {
                top: `${Math.random() * 100}%`, // Position aléatoire en pourcentage
                left: `${Math.random() * 300}%`, // Position aléatoire en pourcentage
            };
            stars.push(<div key={i} className="star" style={style}></div>);
        }
        return stars;
    };

    useEffect(() => {
        const changeBackground = () => {
            const currentTime = new Date().getHours();

            if (currentTime >= 6 && currentTime < 17) {
                setBackground.classList.add("day")
            } else if (currentTime >= 17 && currentTime < 22) {
                setBackground.classList.add("sunset")
            } else {
                setBackground.classList.add("night")
            }
        };
        //  on joue la fonction changeBackground
        changeBackground();
        // une temporalité qui relance la fonction
        const interval = setInterval(changeBackground, 60 * 60 * 1000);
        return () => clearInterval(interval);

    },);

    return (
        <div className='container'>
            <div className="day">
            </div>
            <div className="evening"></div>
            <div className="night-sky">{renderStars()}</div>
        </div>
    );
};

export default Background;
