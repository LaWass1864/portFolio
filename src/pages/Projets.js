import React from 'react';
import Navigation from '../components/Navigation';
import CardCarousel from '../components/CardCarousel';

const Projets = () => {
    return (
        <main className='projets-background'>
        <Navigation />
        <h1>Mes projets</h1> {/* Placer le h1 ici */}
        <CardCarousel />
    </main>
    );
};

export default Projets;
