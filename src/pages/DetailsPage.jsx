import React from 'react';
import EMICalculator from '../components/Calculators/EMICalculator';
// import FuelCostCalculator from '../components/Calculators/FuelCostCalculator'; 
import { MOCK_BIKES } from '../data/bikes'; // Mock Data

// Use the first bike for a static UI demonstration
const bike = MOCK_BIKES[0]; 

const DetailsPage = () => {
  const containerStyle = { maxWidth: '800px', margin: '20px auto', padding: '0 20px' };
  const specsGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' };
  const buttonStyle = { 
    padding: '12px 24px', 
    backgroundColor: '#007bff', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '6px', 
    fontSize: '1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h1>{bike.name}</h1>
      <p style={{ color: '#28a745', fontSize: '1.5em', fontWeight: 'bold' }}>
        Price: ₹{bike.price.toLocaleString('en-IN')}
      </p>

      {/* Product Images */}
      <div style={{ marginBottom: '20px' }}>
        <img 
          src={bike.image} 
          alt={bike.name} 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }} 
        />
      </div>

      <h2>Detailed Specifications</h2>
      <p>{bike.description}</p>

      {/* Specs Table */}
      <div style={specsGridStyle}>
        <p><strong>Engine Capacity:</strong> {bike.engine || bike.battery}</p>
        <p><strong>Fuel Type:</strong> {bike.fuelType}</p>
        <p><strong>Mileage/Range:</strong> {bike.mileage} {bike.fuelType === 'EV' ? 'km' : 'kmpl'}</p>
        <p><strong>Power:</strong> {bike.specs.power}</p>
        <p><strong>Torque:</strong> {bike.specs.torque}</p>
        <p><strong>Weight:</strong> {bike.specs.weight}</p>
      </div>

      <hr style={{ margin: '30px 0' }} />

      {/* Calculators */}
      <h3>Financial Tools</h3>
      <EMICalculator bikePrice={bike.price} />
      {/* <FuelCostCalculator mileage={bike.mileage} fuelType={bike.fuelType} /> */}

      <hr style={{ margin: '30px 0' }} />
      
      {/* Custom Styled Button */}
      <button 
        style={buttonStyle} 
        onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'} 
        onMouseLeave={e => e.target.style.backgroundColor = '#007bff'}
      >
        Contact Seller
      </button>
    </div>
  );
};

export default DetailsPage;