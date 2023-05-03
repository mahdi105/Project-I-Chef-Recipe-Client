import React, { useEffect, useState } from 'react';
import './Chefs.css'
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-recipes-server-mahdi105.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error.message));
    },[]);
    console.log(chefs);
    return (
        <section className='container mx-auto px-2 md:px-0 lg:px-10 pt-20 pb-28'>
            <h1 className='section-heading relative text-center font-[800] text-2xl text-[#232B38] mb-[80px]'>Popular Indian Chefs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </section>
    );
};

export default Chefs;