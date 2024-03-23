import { set } from 'mongoose';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [formData, setFormData] =useState({
        username: '',
        email: '',
        password: ''
    })
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })  ;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          setLoading(true);
          const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(data);
          if (data.success === false) {
            setLoading(false);
            setError(data.message);
            return;
          }
          setLoading(false);
          setError(null);
          navigate('/');
        } catch (error) {
          setLoading(false);
          setError(error.message);
        }
      };
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1> 
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
               
                <input type='email' placeholder='Email' className='border-2 border-gray-300 rounded-lg p-1 m-2' id='email' onChange={handleChange}/>
                <input type='password' placeholder='Password' className='border-2 border-gray-300 rounded-lg p-1 m-2' id='password' onChange={handleChange}/>
                <button  disabled={loading} className='bg-slate-700 text-white p-2 rounded-md w-1/4 m-2 hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>    
            </form>   
            <div className='text-center'> 
                <p>Dont have an account? <a href='/signup' className='text-blue-500 hover:underline'>Sign Up</a></p>
</div>
{error && <p className='text-red-500 mt-5'>{error}</p>}</div>
    )
}