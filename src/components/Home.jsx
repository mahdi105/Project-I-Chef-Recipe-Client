import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <main>
            <section >
                <div className='flex gap-2 items-center justify-start'>
                    <span className='font-[700] text-[16px]'>Wellcome to - </span>
                    <img className='w-[35px]' src="/abc.png" alt="" />
                </div>
            </section>
        </main>
    );
};

export default Home;