import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <header className="navBar">
      <div className="logo">
        <Link to="/">TravelTrucks</Link>
      </div>
      <nav className="navLinks">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/catalog" className="navLink">
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
