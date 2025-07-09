// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>This app helps you manage and schedule your events
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-purple-800 opacity-10 blur-2xl rounded-full z-[-1]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-400 opacity-30 blur-xl rounded-full z-[-1]" />
            <div className="absolute left-0 bottom-20 w-40 h-40 bg-yellow-400 opacity-40 blur-xl rounded-full z-[-1]" />.</p>
    </div>
  );
};

export default About;
