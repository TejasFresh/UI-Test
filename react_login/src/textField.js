import React from 'react';

export const TextField = ({placeholder}) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className='border-b w-full border-gray-400 px-4 py-2 focus:outline-none'
        />
    );
};


