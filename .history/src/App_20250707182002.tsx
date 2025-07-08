// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';


const App: React.FC = () => {
  return (
    <Router>
      <div>
       
      
        <Routes>
          <Route path="/" element={<Hero />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
