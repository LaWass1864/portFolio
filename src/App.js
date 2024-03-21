import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';
import Projets from './pages/Projets';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/APropos" element={<Apropos />} />
        <Route path="/Projets" element={<Projets />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
    </Router>
  );
};

export default App;
