// src/pages/ServicesPage.jsx

import React from 'react';
import Button from '../components/UI/Button'; 

const serviceData = [
  {
    title: 'Routine Maintenance & Servicing',
    description: 'Find authorized service centers and independent mechanics for regular oil changes, tune-ups, and general check-ups.',
    icon: '🛠️',
  },
  {
    title: 'Emergency Repairs & Breakdown Assistance',
    description: 'Get connected with nearby repair shops or request roadside assistance for urgent issues like punctures, battery failure, or engine trouble.',
    icon: '🚨',
  },
  {
    title: 'Accessories & Customization',
    description: 'Browse and purchase genuine parts, safety gear (helmets, gloves), customization kits, and performance upgrades.',
    icon: '✨',
  },
  {
    title: 'Insurance & Financing Assistance',
    description: 'Compare two-wheeler insurance plans, get instant quotes, and find financing options for repairs or new parts.',
    icon: '💰',
  },
];

const ServiceCard = ({ service }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    flex: '1 1 45%', // Allows two cards per row
    minWidth: '300px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    textAlign: 'left',
    backgroundColor: 'white',
  };
  
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{service.icon}</div>
      <h3 style={{ marginBottom: '10px', color: '#333' }}>{service.title}</h3>
      <p style={{ color: '#666', marginBottom: '15px' }}>{service.description}</p>
      <Button variant="primary">Explore Options</Button>
    </div>
  );
};

const ServicesPage = () => {
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
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1>🏍️ Two-Wheeler Services Hub</h1>
      <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '30px' }}>
        Everything you need to keep your ride smooth and safe.
      </p>

      <div style={gridStyle}>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', borderTop: '1px solid #eee' }}>
        <h2>Need Immediate Assistance?</h2>
        <p>Chat with a service expert or find a nearby provider instantly.</p>
        <Button variant="secondary" style={{ backgroundColor: '#28a745' }}>
          Get Roadside Help
        </Button>
      </div>
    </div>
  );
};

export default ServicesPage;