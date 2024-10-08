import React from 'react';

const Link = ({ href, text, className }) => {
    return (
        <a href={href} className={`text-blue-500 hover:underline ${className}`}>
            {text}
        </a>
    );
};

export default Link;
