import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import SectionHeading from '../../utils/SectionHeading/SectionHeading'

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
            <SectionHeading>Popular Indian Chefs</SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </section>
    );
};

export default Chefs;