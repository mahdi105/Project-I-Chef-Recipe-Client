import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        // News Letter Section
        <section className='bg-[#EEBF00]'>
            <div className='container mx-auto px-2 md:px-0 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-[32px]'>
                <div className='flex justify-center items-center'>
                    <img className='w-[280px]' src="/images/hero.webp" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[80%]'>
                        <h2 className='text-2xl font-bold border-2 border-dashed border-[#fcd330] rounded p-3 mb-4'>Subscribe to our newsletter</h2>
                        <p className='mb-10 text-[15px]'>Lorem Ipsum as their default model text, and a search for 'Lorem Ipsum' will uncover many web sites still in their infancy</p>
                        <div className="flex flex-col md:flex-row justify-between md:items-center md:bg-white py-3 md:px-4 rounded-full gap-3">
                            {/* News Letter Input Field */}
                            <input className='rounded-full flex-1 md:flex-none py-3 px-4 md:py-0 md:px-0 block border-none' type="email" name="email" id="email" placeholder="example@chefrecipe.com" />
                            <button type="submit" className='flex-1 md:flex-none transition-all duration-300 py-2 px-4 rounded-full md:text-white font-bold border-2 border-[#232B38] md:border-transparent md:bg-[#976736] hover:bg-[#232B38] text-[#232B38] hover:text-white '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;