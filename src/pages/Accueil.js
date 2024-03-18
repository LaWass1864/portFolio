import React from 'react';
import laptopGuy from '../assets/image/laptop-guy.png'

const Accueil = () => {
    return (
        <main className="accueil-background">

            <div className='mainContainer'>
                <div className="left">
                    <h1> Hello, je suis Wassila</h1>
                    <p> Développeuse front-end</p>
                </div>
                <div className='right'>
                    <img src={laptopGuy} alt="" />
                </div>
            </div>
        </main>
    );
};


export default Accueil;