import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button className={`px-4 py-2 bg-primary-color-light text-center text-white rounded hover:bg-primary-color-dark font-semibold ${className}`}>
      {text}
    </button>
  );
};

export default Button;
