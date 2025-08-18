// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/House';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Waitlist from './pages/Waitlist';
import Galary from './pages/Galary';
import ScrollToTop from './components/ScrollToTop';



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/gallery" element={<Galary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
