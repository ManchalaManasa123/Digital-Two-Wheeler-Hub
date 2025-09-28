import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import { MOCK_BIKES } from '../data/bikes'; // Assuming mock data is available

// A functional component to display a single bike listing
const BikeCard = ({ bike, onCompareToggle }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '300px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  return (
    <div style={cardStyle}>
      <img 
        src={bike.image || MOCK_BIKES[0].image} // Placeholder for image
        alt={bike.name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} 
      />
      <h3 style={{ margin: '5px 0' }}>{bike.name}</h3>
      <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '1.2em' }}>
        ₹{bike.price.toLocaleString('en-IN')}
      </p>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        {bike.brand} | {bike.fuelType}
      </p>

      <div style={{ marginTop: '15px' }}>
        <Link to={`/details/${bike.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
        <Button 
          variant="secondary" 
          onClick={() => onCompareToggle(bike)}
        >
          Compare
        </Button>
      </div>
    </div>
  );
};

export default BikeCard;