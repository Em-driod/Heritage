// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './pages/home';



const App: React.FC = () => {
  return (
    <Router>
      <div>
       
      
        <Routes>
          <Route path="/" element={<home />} />
        
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
