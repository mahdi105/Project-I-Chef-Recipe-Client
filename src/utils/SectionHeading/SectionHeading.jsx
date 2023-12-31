import React from 'react';
import './SectionHeading.css'

const SectionHeading = ({children}) => {
    return (
        // Section Heading
        <h1 className='section-heading relative text-center font-[800] text-2xl text-[#232B38] mb-[100px]'>{children}</h1>
    );
};

export default SectionHeading;