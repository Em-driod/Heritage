// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './pages/Home';



const App: React.FC = () => {
  return (
    <Router>
      <div>
       
      
        <Routes>
          <Route path="/" element={<ome />} />
        
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
