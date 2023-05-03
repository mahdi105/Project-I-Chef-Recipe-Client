import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className='shadow-sm'>
                <div className='container mx-auto lg:px-10 flex items-center justify-center py-8'>
                    <img className='w-[75px]' src="/logo.png" alt="" />
                    <p className='text-[#333333] uppercase font-[900] text-[30px]'>Chef Recipes<span className='text-[#976736] text-[40px]'>.</span></p>
                </div>
                <hr />
                <Navbar fluid={true} rounded={true}>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="/navbars" active={true}>Home</Navbar.Link>
                        <Navbar.Link to="/navbars">About</Navbar.Link>
                        <Navbar.Link href="/navbars">Services</Navbar.Link>
                        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
                        <Navbar.Link href="/navbars">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        </header>
    );
};

export default Header;