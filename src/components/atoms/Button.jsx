import React from 'react';

const Button = ({ text, className}) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-center text-white rounded hover:bg-blue-600 font-semibold ${className}`}>
      {text}
    </button>
  );
};

export default Button;
