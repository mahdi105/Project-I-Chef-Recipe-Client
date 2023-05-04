import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#2D333F] pt-16'>
            <section className='contaier mx-auto px-2 md:px-0 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
                <div>
                    <h2 className='text-2xl font-[900] text-[#8d5a28] uppercase mb-3'>Chef Recipes</h2>
                    <p className='text-gray-300 text-[12px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam fugiat inventore dolorum recusandae quod ex. Facere ipsam .</p>
                    <button className='transition-all duration-300 py-2 text-[13px] rounded hover:bg-[#966635] px-4 bg-[#212631] text-white'>Read More</button>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-white mb-3'>Explore</h2>
                    <div className='flex flex-col gap-3'>
                        <Link className='transition-all text-[14px] duration-300 font-[500] text-slate-200 hover:text-[#9d6b38]' to='/'>Browse Recipe</Link>
                        <Link className='transition-all text-[14px] duration-300 font-[500] text-slate-200 hover:text-[#9d6b38]' to='/'>Submit a Recipe</Link>
                        <Link className='transition-all text-[14px] duration-300 font-[500] text-slate-200 hover:text-[#9d6b38]' to='/'>Out Chefs</Link>
                        <Link className='transition-all text-[14px] duration-300 font-[500] text-slate-200 hover:text-[#9d6b38]' to='/'>Recipe Details</Link>
                        <Link className='transition-all text-[14px] duration-300 font-[500] text-slate-200 hover:text-[#9d6b38]' to='/'>Latest News</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-white mb-3'>Recent Recipes</h2>
                    <div className='flex gap-3 mb-2'>
                        <img className='w-[120px] h-[90px]' src="/images/chicken-curry.webp" alt="" />
                        <div>
                            <h3 className='mb-1 font-semibold text-gray-300 text-[15px]'>Chicken Curry</h3>
                            <p className='text-[12px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img className='w-[120px] h-[90px]' src="/images/chicken-curry.webp" alt="" />
                        <div>
                            <h3 className='mb-1 font-semibold text-gray-300 text-[15px]'>Chicken Curry</h3>
                            <p className='text-[12px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold text-white mb-1'>Chef Cooking Course</h2>
                    <p className='text-slate-300 text-[12px] w-[80%] mb-8'>Contact us for joining Chef Cooking Course</p>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaMapMarkerAlt className='text-[#9d6b38] text-[16px]'></FaMapMarkerAlt>
                        <span className='text-slate-200 text-[14px]'>787 Mark View Street, New Town, California</span>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaEnvelope className='text-[#9d6b38] text-[16px]'></FaEnvelope>
                        <span className='text-slate-200 text-[14px]'>needhelp@chefrecipes.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPhone className='text-[#9d6b38] text-[16px]'></FaPhone>
                        <span className='text-slate-200 text-[14px]'>666 888 0000 </span>
                    </div>
                </div>
            </section>
            <section className='contaier mx-auto px-2 md:px-0 lg:px-10 py-3 bg-[#1c212a]'>
                <p className='text-center text-gray-400'>Copyright © 2023 <span className='text-[#85582b]'>Chef Recipes</span> All Rights Reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;