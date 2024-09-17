import React, { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { PiHandWavingFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the login logic here
        console.log("Form submitted with password:", password);
    };

    return (
        <div className="flex h-screen">
            <div className="relative flex-2 h-screen bg-gray-200 ">    
                <img src={logo} alt="Logo" className="relative top-1 left-10 w-40 h-20" />
                    <div className='wrapper className="flex justify-left p-[50px] items-center mt-12 h-screen bg-gray-100"'>
                    <form onSubmit={handleSubmit} className="bg-white p-9 rounded-lg shadow-lg w-[350px] h-[400px] max-w-md">
                    <h2 className="flex items-center text-2xl font-bold text-left  mb-1">
                    <span>Welcome back</span>
                    <PiHandWavingFill className="text-3xl ml-3 text-yellow-500 "/>
                     </h2>
                    <h2 className="text-1xl font-bold text-left mb-5">Login to access the courses</h2>
                    <div className="input-box relative mb-4">
                        <input type="text" placeholder='Email' required className="w-full border border-gray-300 p-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                            <TfiEmail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 "  />
                    </div>
                    <div className="input-box relative mb-4">
                        <input type={passwordVisible ? "text" : "password"}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                            title="Password must contain at least 8 characters, one uppercase, one lowercase, one number, one special character."
                            className="w-full border border-gray-300 p-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {passwordVisible ? (
                            <IoEyeOutline className=" icon absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} aria-label="Hide password" />
                        ) : (
                            <IoEyeOffOutline className="icon absolute right-3 top-3 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} aria-label="Show password" />
                        )}
                    </div>
                    <div className="forgot mb-4">
                        <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
                    <div className="Signuplink text-center mt-4">
                        <p className="text-sm">Don't have an account? <Link to="/signup" className="text-blue-600 text-sm hover:underline" >Signup here</Link></p>
                    </div>
                </form>
            </div>
            <div className="relative h-screen bg-gray-100">
                {/* This is the blank part */}
            </div>
        </div>                
    </div>
    );
}

export default Login;



