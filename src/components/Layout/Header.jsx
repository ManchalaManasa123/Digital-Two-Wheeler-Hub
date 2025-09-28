// src/components/Layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={headerStyles.header}>
    <Link to="/" style={headerStyles.logo}>🏍️ Digital Two-Wheeler Hub</Link>
    <nav style={headerStyles.nav}>
      <Link to="/buy" style={headerStyles.navLink}>Buy</Link>
      <Link to="/sell" style={headerStyles.navLink}>Sell</Link>
      <Link to="/rent" style={headerStyles.navLink}>Rent</Link>
      <Link to="/services" style={headerStyles.navLink}>Services</Link>
      <Link to="/dashboard" style={{...headerStyles.navLink, ...headerStyles.sellerLink}}>Seller Portal</Link>
    </nav>
  </header>
);

const headerStyles = {
  header: {
    backgroundColor: '#333',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '25px',
    fontSize: '1.05rem',
    transition: 'color 0.2s',
  },
  sellerLink: {
    padding: '5px 10px',
    border: '1px solid #007bff',
    borderRadius: '4px',
    backgroundColor: '#007bff',
  }
};

export default Header;