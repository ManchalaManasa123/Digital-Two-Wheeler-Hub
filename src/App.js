// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header'; 
import ListingPage from './pages/ListingPage';
import DetailsPage from './pages/DetailsPage';
import SellerDashboard from './pages/SellerDashboard';
import ServicesPage from './pages/ServicesPage'; 
import RentPage from './pages/RentPage';
import SellPage from './pages/SellPage'; // <-- Keep this import

// 🛠️ FIX: The 'SimplePage' placeholder definition has been REMOVED entirely 
// to clear the recurring parsing error.

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Marketplace Routes */}
        <Route path="/" element={<ListingPage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/buy" element={<ListingPage />} /> 
        <Route path="/details/:id" element={<DetailsPage />} />
        
        {/* Navigation Routes */}
        <Route path="/sell" element={<SellPage />} />      {/* Using the dedicated SellPage */}
        <Route path="/rent" element={<RentPage />} /> 
        <Route path="/services" element={<ServicesPage />} /> 

        {/* Seller Dashboard */}
        <Route path="/dashboard" element={<SellerDashboard />} />

        {/* 404 Fallback */}
        <Route path="*" element={<h2 style={{ padding: '20px', textAlign: 'center' }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;