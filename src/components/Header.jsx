import React from 'react';

const Header = () => {
    return (
        <header>
            <section className='shadow-sm'>
                <div className='container mx-auto lg:px-10 flex items-center justify-center py-8'>
                    <img className='w-[75px]' src="/logo.png" alt="" />
                    <p className='text-[#333333] uppercase font-extrabold text-[30px]'>Chef Recipes<span className='text-[#976736] text-[40px]'>.</span></p>
                </div>
            </section>
        </header>
    );
};

export default Header;