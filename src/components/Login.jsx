import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const notify = () => toast.success('Login Successful')
const Login = () => {
    const [error, setError] = useState('')
    const {login} = useContext(authContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = 
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('');
        login(email, password)
        .then(result => {
            form.reset();
            notify();
            navigate('/',{replace:true})
        })
        .catch(error => setError(error.message));
        
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
                    <Button className='mb-3' type="submit">
                        Register new account
                    </Button>
                    {
                        error && 
                        <p className='text-[13px] text-red-500 mb-3'>{error}</p>
                    }
                    <hr className='mb-1' />
                    <p>Not a member yet? Please<Link to='/register' className='text-blue-500 font-bold'> Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;