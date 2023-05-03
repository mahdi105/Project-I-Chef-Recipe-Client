import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            home
            {/* <img src={chefs[0].image} alt="" /> */}
        </div>
    );
};

export default Home;