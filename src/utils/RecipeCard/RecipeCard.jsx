import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating';


const RecipeCard = ({ recipe }) => {
    const [isFavourite, setFavourite] = useState(false);
    const { name, image, process, rating, ingredients } = recipe;
    const notifySuccess = () => {
        toast.success("The recipe is your favorite");
        return setFavourite(!isFavourite);
    };
    return (
        <div className='shadow-md rounded-md relative'>
            <div>
                <img src={image} className='rounded-t mb-3 w-full min-h-[270px]' alt="" />
            </div>
            <div className='p-2 mb-16'>
                <h2 className='text-xl mb-2 text-center font-bold'>{name}</h2>
                <div className='flex items-center justify-center gap-2 mb-3'>
                    <span>Rating: </span>
                    <Rating
                        style={{ maxWidth: 90 }}
                        readOnly
                        value={rating}
                    />
                    <span>{rating}</span>
                </div>
                <hr />
                <p className='mt-3 text-justify mb-4'><strong>Process: </strong><span className='text-[13px]'>{process}</span></p>
                <h3 className='font-bold text-[14px] mb-2'>Ingredients</h3>
                <ul className='mb-4'>
                    {
                        ingredients.map((pod, i) => <li key={i}>{pod}</li>)
                    }
                </ul>
            </div>
            <input type='submit' disabled={isFavourite} onClick={notifySuccess} className={`absolute bottom-0 py-3 w-full rounded-b  transition-all duration-300 font-bold text-[14px] ${!isFavourite ? `text-white hover:text-black hover:bg-[#f6a04a] bg-[#976736]`: `hover:bg-none bg-gray-100 text-gray-500`}`} value="Favourite"/>
        </div>
    );
};

export default RecipeCard;