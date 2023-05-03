import React from 'react';
import Banner from '../utils/Banner/Banner'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <main>
            <Banner></Banner>
        </main>
    );
};

export default Home;