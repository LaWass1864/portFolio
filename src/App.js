import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import Projets from './pages/Projets';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/APropos" element={<Apropos />} />
          <Route path="/Projets" element={<Projets />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
