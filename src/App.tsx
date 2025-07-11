// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/House';
import Navbar from './components/Navbar';




const App: React.FC = () => {
  return (
    <Router>
      <div>
       <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
        
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
