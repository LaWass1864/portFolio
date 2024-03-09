import React from 'react';
import Background from '../components/Background'
import Weather from '../components/Weather';

const Home = () => {
    return (
        <div>
            <Background />
            <div className="center-container">
            <div className="text-container">
               <h1> Bienvenue sur mon portfolio </h1>
               <p> Développeuse React & Ux designer</p>
            </div>
            </div>
            {/* Température */}
            <Weather />
        </div>


    );
};

export default Home;