import React from 'react';
import colors from "../styles/_settings.scss";


const Languagecolor = ({ language }) => {
  let color;
  switch (language) {
    case 'Html':
      color = colors.color1; // Utilisez la première couleur définie dans _colors.scss
      break;
    case 'Sass':
      color = colors.color2; // Utilisez la deuxième couleur définie dans _colors.scss
      break;
    case 'javascript':
      color = colors.color3; // Utilisez la troisième couleur définie dans _colors.scss
      break;
    case 'ReactJs':
      color = colors.color4; // Utilisez la quatrième couleur définie dans _colors.scss
      break;
    // Ajoutez des cas pour d'autres langages si nécessaire
    default:
      color = '#000000'; // Utilisez une couleur par défaut si le langage n'est pas trouvé
  }

  return (
    <p className='languages' style={{ color }}>
      {language ? language : ""}
    </p>
  );
};

export default Languagecolor;
