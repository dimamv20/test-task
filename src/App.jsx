// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './componenets/navigation';
import CatalogPage from './pages/CatalogPage';
import DetailCamper from './componenets/DetailCamper';
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailCamper />} />

      </Routes>
    </Router>
  );
}

export default App;
