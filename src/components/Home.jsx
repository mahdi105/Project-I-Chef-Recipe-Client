import React from 'react';
import Banner from '../utils/Banner/Banner'
import { useLoaderData } from 'react-router-dom';
import Chefs from '../utils/Chefs/Chefs';
import Newsletter from '../utils/Newsletter/Newsletter';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Chefs></Chefs>
            <Newsletter></Newsletter>
        </main>
    );
};

export default Home;