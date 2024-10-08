import React, { useState } from 'react';
import InputBox from '../atoms/InputBox';
import Button from '../atoms/Button';

const Form = ({header, inputConfigs, onSubmit, footer }) => {
    const [formValues, setFormValues] = useState(
        inputConfigs.reduce((acc, curr) => {
            acc[curr.name] = '';
            return acc;
        }, {})
    );

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 shadow-md rounded-md">
                <img src="logo512.png" alt="Logo" className="mx-auto w-32 h-32" />
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>{header}</div>
                    {inputConfigs.map((config, index) => (
                        <InputBox
                            key={index}
                            label={config.label}
                            placeholder={config.placeholder}
                            value={formValues[config.name]}
                            onChange={handleChange}
                            name={config.name}
                            type={config.type || 'text'}
                        />
                    ))}
                    <Button text="Submit" className="w-1/2 block mx-auto"/>
                    {footer && <div>{footer}</div>}
                </form>
            </div>
        </div>
    );
};

export default Form;
