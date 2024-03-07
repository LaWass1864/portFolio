import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


const App = () => {
    return (
      <BrowserRouter>
            
        {/* Enveloppez toutes les Routes à l'intérieur de cette balise parente */}
        <div>
          <Routes>
            {/* les chemins */}
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
          </Routes>
        </div>
        
       
      </BrowserRouter>
    );
  };

export default App;