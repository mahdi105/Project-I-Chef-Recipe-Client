import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";

const ChefRecipes = () => {
    const [chefs, setChefs] = useState([]);
    const [chef, setChef] = useState({})
    const chefrecipes = useLoaderData();//particular recipes
    const chefId = chefrecipes[0]?.chef_id;
    const {name, image, bio, likes, recipes, experience} = chef || {};
    useEffect(() => {
        fetch('https://assignment-recipes-server-mahdi105.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error.message))
    }, [chefrecipes]);

    useEffect(()=>{
        const newchef = chefs?.find(chef => chef.id == chefId); //Chef
        setChef(newchef);
    },[chefs]);
    return (
        <main>
            <section className='bg-slate-100'>
                <div className='container mx-auto px-2 md:px-0 lg:px-10 grid grid-cols-1 md:grid-cols-6 py-6 gap-10'>
                    <div className='md:col-span-2 pt-5 flex justify-center items-center rounded-full bg-[#E7DCD0]'>
                        <img className='w-[180px] h-[210px]' src={image} alt="" />
                    </div>
                    <div className='md:col-span-4 p-5'>
                       <h1 className='font-extrabold text-[#976736] text-[24px] mb-3'>{name}</h1>
                       <p className='mb-4'><span className='underline'>Biography: </span> {bio}</p>
                       <hr />
                       <div className='mt-4'>
                        <h3 className='font-bold text-xl mb-2'>Profile</h3>
                        <div className='flex gap-10'>
                            <span className='flex items-center'><FaCaretRight/>{recipes} <span>Recipes</span></span>
                            <span>. {experience} Years of Experience</span>
                            <span>. {recipes} Likes</span>
                        </div>
                       </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ChefRecipes;