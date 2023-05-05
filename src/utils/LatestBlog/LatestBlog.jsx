import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

const LatestBlog = () => {
    return (
        // Blog section
        <section className='bg-[#F0F0F0]'>
            <div className='container mx-auto px-2 md:px-0 lg:px-10 pt-16 pb-24'>
                <SectionHeading>Latest Blog</SectionHeading>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'>
                    <div className='bg-white rounded'>
                        <div>
                            <img className='w-full object-cover rounded-t' src="/images/chicken-curry.webp" alt="" />
                        </div>
                        <div className='p-4'>
                            <div className='mb-3 flex items-center justify-between'>
                                <span>May 04, 2023</span>
                                <div className='flex items-center justify-end gap-3'>
                                    <span>Posted by <strong>Chef Recipes</strong></span>
                                    <span>12 Comments</span>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold mb-4'>Lorem Ipsum is simply dummy text of the printing</h2>
                                <p>Its a long establishe fact that a reader will be destracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more letters.</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded'>
                        <div>
                            <img className='w-full object-cover rounded-t' src="/images/kacchi.webp" alt="" />
                        </div>
                        <div className='p-4'>
                            <div className='mb-3 flex items-center justify-between'>
                                <span>May 04, 2023</span>
                                <div className='flex items-center justify-end gap-3'>
                                    <span>Posted by <strong>Chef Recipes</strong></span>
                                    <span>12 Comments</span>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold mb-4'>Lorem Ipsum is simply dummy text of the printing</h2>
                                <p>Its a long establishe fact that a reader will be destracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more letters.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='py-3 px-6 bg-[#976736] text-white border border-transparent rounded-md hover:bg-white hover:text-[#976736] border-[#976736] font-bold transition-all duration-300'>View More</button>
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;