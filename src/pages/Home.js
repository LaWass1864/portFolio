import React from 'react';
import Background from '../components/Background'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Background />
            <div className="center-container">
                <div className="text-container">
                    <h1> Bienvenue sur mon portfolio </h1>
                    <p> Développeuse front-end</p>
                    <Link to="/Accueil">
                        <button className='square_btn'>Entrer</button>
                    </Link>
                </div>
            </div>

        </div>


    );
};

export default Home;