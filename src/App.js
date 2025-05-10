import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact'; 
import Home from './Components/Home';
import Machines from './Components/Machines';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
       
 
        </div>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Machines">Machines</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Machines" element={<Machines />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      </main>
    </div>
  );
}

export default App;

