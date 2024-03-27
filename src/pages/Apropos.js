import Navigation from '../components/Navigation';
import React from 'react'; // Assurez-vous d'importer React si vous n'utilisez pas JSX.


const Apropos = () => {

  let langages = ["Figma", "JavaScript", "ReactJs", "Html/Css/Sass", "GitHub", "Webdesign", "Recherche utilisateur", "SwiftUi", "API", " Responsive", "UxDesign"];

  const langageIcon = (langage) => {
    if (langage === "Figma" || langage === "Webdesign" || langage === "UxDesign") {
      return '🎨';
    } else if (langage === "GitHub" || langage === "Responsive" || langage === " Html/Css/Sass" || langage === "ReactJs" || langage === "API" || langage === "SwiftUi" || langage === "JavaScript") {
      return '💻';
    } else {
      return '🔍';
    }
  }

  return (
    <main className='apropos-background'>
      <Navigation currentPage='/Apropos' />
      <h1>A propos de moi </h1>
      <div className="box">
        {langages.map((langage, index) => (
          <div className="badge" key={index}>
            <span>{langageIcon(langage)}</span> {/* Affiche l'icône */}
            <span>{langage}</span> {/* Affiche le nom du langage */}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Apropos;
