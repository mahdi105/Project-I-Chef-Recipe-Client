import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(authContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        
    }
    return (
        <div className='container mx-auto px-2 md:px-0 lg:px-10 py-20'>
            <div className='mx-auto mb-5 max-w-[500px] p-5 rounded-md border border-gray-100 shadow-sm'>
                <h1 className='text-center mb-4 font-extrabold text-[35px]'>Log In</h1>
                <hr className='mb-4' />
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <TextInput id="email" type="email" name="email" placeholder="name@chefrecipes.com" required={true} shadow={true}
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
                    <Button type="submit mb-3">
                        Register new account
                    </Button>
                    <hr className='mb-1' />
                    <p>Not a member yet? Please<Link to='/register' className='text-blue-500 font-bold'> Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;