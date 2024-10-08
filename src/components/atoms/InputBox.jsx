import React from 'react';

const InputBox = ({ label, placeholder, value, onChange, name, type = "text" }) => {
  return (
    <div>
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
    </div>
  );
};

export default InputBox;
