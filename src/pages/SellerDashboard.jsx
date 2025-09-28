import React from 'react';
import Button from '../components/UI/Button';

const SellerDashboard = () => {
  const containerStyle = { maxWidth: '1000px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' };
  const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '20px' };
  const thTdStyle = { border: '1px solid #ddd', padding: '8px', textAlign: 'left' };

  return (
    <div style={containerStyle}>
      <h2>Seller Dashboard: Listing Management</h2>
      <Button variant="primary" onClick={() => alert("Open New Listing Form")}>
        + Create New Listing
      </Button>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Price</th>
            <th style={thTdStyle}>Status</th>
            <th style={thTdStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>b1</td>
            <td style={thTdStyle}>RE Classic 350</td>
            <td style={thTdStyle}>₹1,93,000</td>
            <td style={thTdStyle}><span style={{ color: 'green' }}>Active</span></td>
            <td style={thTdStyle}>
              <Button variant="secondary" onClick={() => alert('Edit b1')}>Edit</Button>
              <Button variant="primary" style={{ backgroundColor: 'red' }} onClick={() => alert('Delete b1')}>Delete</Button>
            </td>
          </tr>
          <tr>
            <td style={thTdStyle}>b2</td>
            <td style={thTdStyle}>Ola S1 Pro</td>
            <td style={thTdStyle}>₹1,47,499</td>
            <td style={thTdStyle}><span style={{ color: 'orange' }}>Pending</span></td>
            <td style={thTdStyle}>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SellerDashboard;