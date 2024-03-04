// Background.js

import React, { useEffect } from 'react';
import '../styles/components/_background-styles.scss';

const Background = () => {
    const setBackground = document.querySelector("body");
   
    useEffect(() => {
        const changeBackground = () => {
            const currentTime = new Date().getHours();

            if (currentTime >= 6 && currentTime < 18) {
                setBackground.classList.add("day")
            } else if (currentTime >= 18 && currentTime < 22) {
                setBackground.classList.add("evening")
            } else {
                setBackground.classList.add("night")
            }
        };

        changeBackground();

        const interval = setInterval(changeBackground, 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, );

    return (
               
                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
   
    );
};

export default Background;
