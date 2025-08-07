// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/House';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Waitlist from './pages/Waitlist';



const App: React.FC = () => {
  return (
    <Router>
      <div>
       <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<Waitlist />} />
          {/* Add more routes as needed */} 
        
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
