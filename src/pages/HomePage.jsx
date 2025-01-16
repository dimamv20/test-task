// src/pages/HomePage.jsx
import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="content">
        <div className='homeText'>
            <h1>Campers of your dreams</h1>
            <h2>You can find everything you want in our catalog</h2>
        </div>
        <button className="btn">View Now</button>
      </div>
    </div>
  );
};

export default HomePage;
