// src/components/FilterBar.jsx
import React from 'react';
import Button from './UI/Button';

const FilterBar = ({ filters, onFilterChange, onApply }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    padding: '15px',
    borderRight: '1px solid #eee',
    // position: 'sticky', // Keep sidebar fixed for better UX
    // top: '0', 
    height: 'fit-content',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
  };

  const inputGroupStyle = { marginBottom: '15px' };

  return (
    <div style={containerStyle}>
      <h3>Find Your Ride 🔍</h3>
      
      {/* Search Input */}
      <div style={inputGroupStyle}>
        <label style={{display: 'block', fontWeight: 'bold'}}>Search (Name/Brand)</label>
        <input 
          type="text" 
          placeholder="e.g., Classic 350, Ola"
          value={filters.search || ''}
          onChange={(e) => onFilterChange('search', e.target.value)}
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      </div>

      {/* Fuel Type Filter */}
      <div style={inputGroupStyle}>
        <label style={{display: 'block', fontWeight: 'bold'}}>Fuel Type</label>
        <select 
          value={filters.fuelType || ''}
          onChange={(e) => onFilterChange('fuelType', e.target.value)} 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="EV">EV (Electric)</option>
        </select>
      </div>

      {/* Type Filter */}
      <div style={inputGroupStyle}>
        <label style={{display: 'block', fontWeight: 'bold'}}>Vehicle Type</label>
        <select 
          value={filters.vehicleType || ''}
          onChange={(e) => onFilterChange('vehicleType', e.target.value)} 
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="">All Types</option>
          <option value="Bike">Bike</option>
          <option value="Scooter">Scooter</option>
          <option value="EV">EV</option>
        </select>
      </div>
      
      {/* Price Range Filter (Simplified) */}
      <div style={inputGroupStyle}>
          <label style={{display: 'block', fontWeight: 'bold'}}>Max Price (₹)</label>
          <input 
            type="range" 
            min="50000" 
            max="300000" 
            step="10000"
            value={filters.maxPrice || 300000} 
            onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))} 
            style={{ width: '100%' }} 
          />
          <p style={{ marginTop: '5px', fontSize: '0.9em' }}>
            Up to **₹{(filters.maxPrice || 300000).toLocaleString('en-IN')}**
          </p>
      </div>

      <Button variant="primary" onClick={onApply} style={{ width: '100%', marginTop: '10px' }}>
        Search
      </Button>
    </div>
  );
};

export default FilterBar;