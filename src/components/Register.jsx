import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container mx-auto px-2 md:px-0 lg:px-10 py-20'>
            <div className='mx-auto mb-5 max-w-[500px] p-5 rounded-md border border-gray-100 shadow-sm'>
                <h1 className='text-center mb-4 font-extrabold text-[35px]'>Sign Up</h1>
                <hr className='mb-4' />
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="userName"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="userName"
                            type="text"
                            placeholder='John Doe'
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <TextInput id="email" type="email" name="email" placeholder="name@chefrecipes.com"required={true} shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password < Ab09$%6 >"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo"
                                value="Your Photo"
                            />
                        </div>
                        <TextInput
                            id="photo"
                            type="file"
                            name="file"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <Button type="submit mb-3">
                        Register new account
                    </Button>
                    <hr className='mb-1' />
                    <p>Already have an account? Please<Link to='/login' className='text-blue-500 font-bold'> Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;