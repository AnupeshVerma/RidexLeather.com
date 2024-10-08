import React from 'react';

const Text = ({ text, className }) => {
    return <p className={`text-sm ${className}`}>{text}</p>;
};

export default Text;
