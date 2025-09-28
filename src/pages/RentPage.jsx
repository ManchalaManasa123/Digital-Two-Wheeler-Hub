// src/pages/RentPage.jsx

import React from 'react';
import Button from '../components/UI/Button'; 

const rentalCategories = [
  {
    title: 'Daily & Weekend Rentals',
    description: 'Perfect for short trips, test rides, or quick weekend getaways. Choose from bikes and scooters.',
    icon: '🛵',
  },
  {
    title: 'Long-Term Leases (Monthly)',
    description: 'Cost-effective solutions for students or professionals needing transport for a month or more without the commitment of buying.',
    icon: '📅',
  },
  {
    title: 'Adventure & Touring Bikes',
    description: 'Rent high-performance motorcycles suitable for Himalayan treks or long-distance touring routes.',
    icon: '🏍️',
  },
  {
    title: 'Electric Two-Wheeler Rentals',
    description: 'Rent electric bikes and scooters for eco-friendly city commuting. Includes fast charging options.',
    icon: '⚡',
  },
];

const RentalCard = ({ category }) => {
  const cardStyle = {
    border: '1px solid #007bff', // Use a distinctive color for Rent
    borderRadius: '8px',
    padding: '20px',
    flex: '1 1 45%', 
    minWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 123, 255, 0.1)',
    textAlign: 'left',
    backgroundColor: '#f7faff', // Light blue background
  };
  
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{category.icon}</div>
      <h3 style={{ marginBottom: '10px', color: '#007bff' }}>{category.title}</h3>
      <p style={{ color: '#555', marginBottom: '15px' }}>{category.description}</p>
      <Button variant="primary">View Rental Deals</Button>
    </div>
  );
};

const RentPage = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '30px auto',
    padding: '0 20px',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    marginTop: '30px',
  };

  return (
    <div style={containerStyle}>
      <h1>🔑 Two-Wheeler Rentals</h1>
      <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '40px' }}>
        Find the perfect ride for any duration, hassle-free.
      </p>

      <div style={gridStyle}>
        {rentalCategories.map((category, index) => (
          <RentalCard key={index} category={category} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px', padding: '20px', borderTop: '1px solid #eee' }}>
        <h2>Want to List Your Vehicle for Rent?</h2>
        <p>Join our partner program and start earning passive income on your idle two-wheeler.</p>
        <Button variant="secondary" style={{ backgroundColor: '#ffc107', color: '#333' }}>
          Become a Rental Partner
        </Button>
      </div>
    </div>
  );
};

export default RentPage;