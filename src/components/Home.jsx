import React from 'react';
import Banner from '../utils/Banner/Banner'
import { useLoaderData } from 'react-router-dom';
import Chefs from '../utils/Chefs/Chefs';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Chefs></Chefs>
        </main>
    );
};

export default Home;