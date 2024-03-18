import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import Projets from './pages/Projets';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Accueil" element={<>
          <Navigation /> {/* Inclure la Navigation sur toutes les pages sauf /Home */}
          <Accueil />
        </>} />
        <Route path="/Contact" element={<>
          <Navigation />
          <Contact />
        </>} />
        <Route path="/APropos" element={<>
          <Navigation />
          <Apropos />
        </>} />
        <Route path="/Projets" element={<>
          <Navigation />
          <Projets />
        </>} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
};

export default App;
