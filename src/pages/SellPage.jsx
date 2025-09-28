// src/pages/SellPage.jsx

import React, { useState } from 'react';
import Button from '../components/UI/Button'; 

const SellPage = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    description: '',
    photos: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Listing Submitted:', formData);
    // In a real app, this would send data to the backend API
    alert(`Listing for ${formData.brand} ${formData.model} submitted! (Check console for details)`);
    setFormData({ // Reset form
      brand: '', model: '', year: '', price: '', mileage: '', description: '', photos: null,
    });
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '30px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0 15px 0',
    display: 'inline-block',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
    display: 'block'
  };

  return (
    <div style={containerStyle}>
      <h1>💸 Sell Your Two-Wheeler</h1>
      <p style={{ color: '#555', marginBottom: '20px' }}>
        List your bike or scooter quickly and reach thousands of buyers.
      </p>

      <form onSubmit={handleSubmit}>
        
        <label htmlFor="brand" style={labelStyle}>Brand</label>
        <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} style={inputStyle} placeholder="e.g., Royal Enfield" required />

        <label htmlFor="model" style={labelStyle}>Model</label>
        <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} style={inputStyle} placeholder="e.g., Classic 350" required />
        
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <label htmlFor="year" style={labelStyle}>Year of Purchase</label>
                <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} style={inputStyle} placeholder="e.g., 2020" required />
            </div>
            <div style={{ flex: 1 }}>
                <label htmlFor="mileage" style={labelStyle}>Total KMs Driven</label>
                <input type="number" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} style={inputStyle} placeholder="e.g., 15000" required />
            </div>
        </div>
        
        <label htmlFor="price" style={labelStyle}>Asking Price (₹)</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} style={inputStyle} placeholder="e.g., 150000" required />

        <label htmlFor="description" style={labelStyle}>Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} style={{ ...inputStyle, minHeight: '100px' }} placeholder="Detail the condition, modifications, and reasons for selling." required></textarea>
        
        <label htmlFor="photos" style={labelStyle}>Upload Photos (Min 3)</label>
        <input type="file" id="photos" name="photos" onChange={handleChange} style={inputStyle} multiple accept="image/*" required />
        
        <p style={{ fontSize: '0.9em', color: '#888', marginTop: '20px' }}>
            By submitting, you agree to our terms and conditions. Your listing will be reviewed within 24 hours.
        </p>

        <Button variant="primary" style={{ width: '100%', padding: '12px', marginTop: '20px' }}>
          Submit Listing
        </Button>
      </form>
    </div>
  );
};

export default SellPage;