import React from 'react';
import { toast } from 'react-hot-toast';

const notifySuccess = () => toast.success("Added to favourite list");
const RecipeCard = ({recipe}) => {
    const {name, image, process, rating, ingredients} = recipe;
    return (
        <div className='shadow-md rounded-md relative'>
            <div>
                <img src={image} className='rounded-t mb-3 w-full min-h-[270px]' alt="" />
            </div>
            <div className='p-2 mb-16'>
                <h2 className='mb-4 text-xl text-center font-bold'>{name}</h2>
                <p className='text-justify mb-4'><strong>Process: </strong><span className='text-[13px]'>{process}</span></p>
                <h3 className='font-bold text-[14px] mb-2'>Ingredients</h3>
                <ul className='mb-4'>
                    {
                        ingredients.map((pod,i) => <li key={i}>{pod}</li>)
                    }
                </ul>
                <p className='mb-3 font-bold text-[14px]'>Rating: {rating}</p>
            </div>
            <button onClick={notifySuccess} className='absolute bottom-0 py-3 w-full rounded-b text-white hover:text-black transition-all duration-300 font-bold text-[14px] hover:bg-[#f6a04a] bg-[#976736]'>Favourite</button>
        </div>
    );
};

export default RecipeCard;