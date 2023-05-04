import React from 'react';

const RecipeCard = ({recipe}) => {
    const {name, image, process, rating, ingredients} = recipe;
    return (
        <div className='p-2 shadow-md rounded-md'>
            <div>
                <img src={image} className='rounded mb-3' alt="" />
            </div>
            <div>
                <h2 className='mb-4 text-xl text-center font-bold'>{name}</h2>
                <p className='text-justify mb-4'><strong>Process: </strong><span className='text-[13px]'>{process}</span></p>
                <h3 className='font-bold text-[14px] mb-2'>Ingredients</h3>
                <ul className='mb-4'>
                    {
                        ingredients.map((pod,i) => <li key={i}>{pod}</li>)
                    }
                </ul>
                <p className='mb-3 font-bold text-[14px]'>Rating: {rating}</p>
                <button className='py-3 w-full rounded-md text-white hover:text-black transition-all duration-300 font-bold text-[14px] hover:bg-[#f6a04a] bg-[#976736]'>Favourite</button>
            </div>
        </div>
    );
};

export default RecipeCard;