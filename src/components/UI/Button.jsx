import React from 'react';

const Button = ({ children, onClick, variant = 'primary', style = {} }) => {
  const baseStyle = {
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      ':hover': { backgroundColor: '#0056b3' },
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      marginLeft: '10px',
      ':hover': { backgroundColor: '#5a6268' },
    },
  };

  return (
    <button 
      onClick={onClick} 
      style={{ ...baseStyle, ...variantStyles[variant], ...style }}
    >
      {children}
    </button>
  );
};

export default Button;