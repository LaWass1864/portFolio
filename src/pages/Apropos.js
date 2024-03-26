import React from 'react';
import Navigation from '../components/Navigation';

const Apropos = () => {
  // Fonction pour calculer les coordonnées polaires
  const calculatePosition = (angle, radiusX, radiusY) => {
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    return { x, y };
  };

  // Nombre d'éléments à placer autour de l'ellipse
  const numItems = 3;

  // Diamètres de l'ellipse
  const diameterX = 300; // Ajustez selon la largeur de l'ellipse
  const diameterY = 200; // Ajustez selon la hauteur de l'ellipse

  // Rayons de l'ellipse (moitié des diamètres)
  const radiusX = diameterX / 2;
  const radiusY = diameterY / 2;

  // Calcul de l'angle entre chaque élément
  const angleIncrement = (2 * Math.PI) / numItems;

  return (
    <main className='apropos-background'>
          <Navigation currentPage='/Apropos' />   
      <div className="circle-container">
        {[...Array(numItems)].map((_, index) => {
          const angle = index * angleIncrement;
          const position = calculatePosition(angle, radiusX, radiusY);
          return (
            <div
              key={index}
              className="circle-item"
              style={{ top: `calc(50% + ${position.y}px)`, left: `calc(50% + ${position.x}px)` }}
            >
              Item {index + 1}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Apropos;
