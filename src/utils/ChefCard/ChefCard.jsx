import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import './ChefCard.css'

const ChefCard = ({ chef }) => {
    const {id,name,image,experience,recipes,likes} = chef;
    return (
        <div className="card bg-base-100 shadow-md rounded-md">
            <figure className="px-10 pt-10 mb-2 flex justify-center bg-[#9767363b] rounded-t-md">
                <LazyLoad height={250} offset={300} threshold={0.95}>
                    <img src={image} alt="" className="rounded-xl w-[160px] h-[250px]" />
                </LazyLoad>
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title font-semibold text-xl mb-3">{name}</h2>
                <ul className='mb-6 pl-4'>
                    <li>{experience} Years Of Experience</li>
                    <li>{recipes} Recipes</li>
                    <li>{likes} Likes</li>
                </ul>
                <div className='mb-3'>
                    <Link className='bg-[#976736] py-3 px-5 rounded text-white hover:bg-[#8a4c0e]' to={`/chef/recipes/${id}`}>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;