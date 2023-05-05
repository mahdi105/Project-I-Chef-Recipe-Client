import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const notify = () => toast.success('Registration Successful');
const Register = () => {
    const [error, setError] = useState('');
    const {createUser, user} = useContext(authContext);//Auth context
    const navigate = useNavigate(); 
    const profileUpdate = (userName, photo, cUser) => {
        console.log(userName, photo);
        updateProfile(cUser, {
            displayName: userName,
            photoURL: photo || null
        })
        .then(() => {navigate(0)})
        .catch(error => console.log('Update Profile: ',error.message));
    }
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.text.value;
        const photo = form.photo.value;
        console.log(name,photo);
        setError('');
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)){
            setError('Password must contain at least an uppercase, a lowercase letter, a number and a special character. Required more than 6 characters');
            return
        }
        if(!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(photo)){
            setError('Please provide a valid Photo URL');
        }
        createUser(email, password)
        .then(result => {
            profileUpdate(name, photo, result.user);
            form.reset();
            notify();
            navigate('/login',{replace:true})
        })
        .catch(error => setError(error.message));

    }
    return (
        <div className='container mx-auto px-2 md:px-0 lg:px-10 py-20'>
            <div className='mx-auto mb-5 max-w-[500px] p-5 rounded-md border border-gray-100 shadow-sm'>
                <h1 className='text-center mb-4 font-extrabold text-[35px]'>Sign Up</h1>
                <hr className='mb-4' />
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
                            name='text'
                            placeholder='John Doe'
                            required={true}
                            shadow={true}
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
                                value="Your Photo (Optional)"
                            />
                        </div>
                        <TextInput
                            id="photo"
                            type="text"
                            name="photo"
                            placeholder='Photo URL'
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
                    <p>Already have an account? Please<Link to='/login' className='text-blue-500 font-bold'> Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;