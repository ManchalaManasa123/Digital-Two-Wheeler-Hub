import React, { useState } from 'react';

const EMICalculator = ({ bikePrice }) => {
  // Dummy logic for now to clear the error
  const [loanAmount, setLoanAmount] = useState(bikePrice || 100000);

  const containerStyle = { border: '1px solid #007bff', padding: '15px', borderRadius: '6px', margin: '20px 0' };

  return (
    <div style={containerStyle}>
      <h4>Monthly EMI Calculator</h4>
      <p>Ex-Showroom Price: **₹{(bikePrice || 0).toLocaleString('en-IN')}**</p>
      <p>Loan Amount: ₹{loanAmount.toLocaleString('en-IN')}</p>
      {/* Implement full form and calculation here */}
      <h3 style={{ color: '#007bff' }}>
        Estimated EMI: ₹ 3,500 / month
      </h3>
    </div>
  );
};

export default EMICalculator;