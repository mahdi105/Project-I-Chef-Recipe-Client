import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <section className='shadow-sm'>
                <div className='container mx-auto px-2 md:px-0 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
                    <button className='hidden md:block px-[20px] py-3 bg-[#ff0005] text-white rounded-sm hover:bg-[#cf0003] transition-all duration-300'>Submit Recipe</button>
                    <div className='flex items-center justify-center'>
                        <img className='w-[55px] md:w-[75px]' src="/logo.png" alt="" />
                        <p className='text-[#333333] uppercase font-[900] text-[20px] md:text-[30px]'>Chef Recipes<span className='text-[#976736] text-[40px]'>.</span></p>
                    </div>
                    <div className='flex justify-start gap-2 items-center border border-slate-200 p-3 rounded'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaPinterest></FaPinterest>
                        <FaInstagram></FaInstagram>
                    </div>
                </div>
                <hr />
                <div className='container mx-auto px-2 md:px-0 py-2 lg:px-10 flex justify-between items-center'>
                    <button onClick={() => setOpen(!open)} className='md:hidden'>
                        {
                            open ? <XMarkIcon className="h-6 w-6 text-blue-500" /> :
                                <Bars3Icon  className="h-6 w-6 text-blue-500" ></Bars3Icon>
                        }
                    </button>
                    <nav className={`flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-11 font-semibold absolute md:static duration-500 ${open ? 'top-[270px]' : '-top-96'} bg-white md:rounded-none rounded-md md:p-0 p-4 md:shadow-none shadow-lg md:border-none border border-slate-200`}>
                        <NavLink  to="/" className={({ isActive }) => isActive ? "active w-40 md:w-[auto]" : "w-40 md:w-[auto]"}>
                            Home
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active w-40 md:w-[auto]" : "w-40 md:w-[auto]"}>
                            Blog
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active w-40 md:w-[auto]" : "w-40 md:w-[auto]"}>
                            About Us
                        </NavLink>
                        <NavLink to="/login" className={({ isActive }) => isActive ? "active w-40 md:w-[auto]" : "w-40 md:w-[auto]"}>
                            Login
                        </NavLink>
                        <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
                            Register
                        </NavLink>
                    </nav>
                    <div className='flex items-center gap-5'>
                        <button className='py-3 px-4  rounded-md transition-all duration-300 hover:bg-gray-600 hover:text-white font-semibold'>Logout</button>
                        <img className='w-[60px]' src="/logo.png" alt="" />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;