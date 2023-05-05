import React from 'react';
import './Banner.css';
import { FaGlobeAmericas } from "react-icons/fa";

const Banner = () => {
    return (
        
        // Banner Section
        <section id='banner' className='py-36'>
            <div className='container mx-auto px-2 md:px-0 lg:px-10'>
                <div className='md:w-4/6 mx-auto'>
                    <div className='flex gap-2 items-center justify-center mb-3'>
                        <p className='text-center font-[700] text-[16px]'>Wellcome to - </p>
                        <img className='w-[35px]' src="/abc.png" alt="" /><span>Recipes</span>
                    </div>
                    <h2 className='text-white md:text-[#232B38] text-center font-black text-[55px] mb-3'>Enjoy Cooking</h2>
                    <h1 className='mb-16 text-[28px] text-black md:text-[#232B38] md:text-center font-extrabold md:text-[36px] w-[92%] mx-auto'>No Matter how you cook, <span className='text-rose-700 md:text-[#cd7e2f]'>Chef Recipes</span> has many the recipes</h1>
                    <div className='flex justify-center'>
                        <button className='flex transition-all duration-300 items-center gap-2 py-5 px-8 bg-[#976736] hover:bg-[#b8722d] rounded text-white font-bold'><FaGlobeAmericas/> <span>Browse Recipe</span></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;