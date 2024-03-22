import React from 'react'

export default function SignUp() {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1> 
            <form className='flex flex-col gap-4 items-center'>
                <input type='text' placeholder='Username' className='border-2 border-gray-300 rounded-lg p-1 m-2' id='username' />
                <input type='email' placeholder='Email' className='border-2 border-gray-300 rounded-lg p-1 m-2' id='email'/>
                <input type='password' placeholder='Password' className='border-2 border-gray-300 rounded-lg p-1 m-2' id='password' />
                <button  className='bg-slate-700 text-white p-2 rounded-md w-1/4 m-2 hover:opacity-95 disabled:opacity-80'>Sign Up</button>    
            </form>   
            <div className='text-center'>
                <p>Already have an account? <a href='/signin' className='text-blue-500 hover:underline'>Sign In</a></p>
</div>
        </div>
    )
}
