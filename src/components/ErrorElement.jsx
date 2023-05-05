import { Button } from 'flowbite-react';
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { HiOutlineReply } from "react-icons/hi";

const ErrorElement = () => {
    const { error, status } = useRouteError();
    const navigate = useNavigate();

    return (
        // Error Component
        <main className='flex justify-center h-[100vh] items-center'>
            <div>
                <div className='flex flex-col items-center gap-1 mb-3'>
                    <img className='w-[180px] h-[180px]' src="/error.png" alt="" />
                    <h2 className='text-6xl font-black text-[#232B38]'>{status || '404'}</h2>
                </div>
                <p className='mb-4'>{error.message}</p>
                <div className='flex justify-center'>
                    <Button onClick={()=> navigate('/')}>
                        Move to Home page
                        <HiOutlineReply className="ml-2 h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </main>
    )
};

export default ErrorElement;