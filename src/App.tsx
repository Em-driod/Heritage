// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/House';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App: React.FC = () => {
  return (
    <Router>
      <div>
       <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
        
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
