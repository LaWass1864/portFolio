import React from 'react';
import Background from '../components/Background'

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
        </div>


    );
};

export default Home;