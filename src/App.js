import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import Apropos from './pages/Apropos';



const App = () => {
    return (
      <BrowserRouter>
            
        {/* Enveloppez toutes les Routes à l'intérieur de cette balise parente */}
        <div>
          <Routes>
            {/* les chemins */}
            <Route path='/' element={<Home />} />
            <Route path='/Accueil' element={<Accueil />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Projets' element={<Projets />} />
            <Route path='/Apropos' element={<Apropos />} />
          </Routes>
        </div>
        
       
      </BrowserRouter>
    );
  };

export default App;