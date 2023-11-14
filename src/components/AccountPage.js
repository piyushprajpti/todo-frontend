import React from 'react'

export default function AccountPage() {
    return (
        <div className='flex flex-col w-full items-center p-8'>

            <div className='flex flex-col w-full'>
                <p className='text-3xl font-bold pb-10 text-gray-700'>Welcome Back!</p>

                <input
                    type="text"
                    placeholder='Email or Username'
                    className='w-full outline-none text-lg p-2 pl-4 border-solid border-gray-300 focus:border-primary-red border-2 rounded-lg'
                />

                <p className='text-red-500 mt-1 mx-1 mb-3 h-6'>Wrong email or username</p>

                <input
                    type="password"
                    placeholder='Password'
                    className='w-full outline-none text-lg p-2 pl-4 border-solid border-gray-300 focus:border-primary-red border-2 rounded-lg'
                />

                <div className='flex justify-between mt-1 mx-1'>
                    <p className='text-red-500'>Wrong password</p>
                    <p className='text-gray-500 underline hover:cursor-pointer active:text-gray-400 md:hover:text-gray-400'>Reset Password</p>
                </div>

                <p className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-red rounded-lg md:hover:bg-primary-red-hover active:bg-primary-red-hover duration-200 mt-8`}>Log In</p>
            </div>

            <div className='w-full flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Don't have an account?</p>
                <p className='underline text-lg text-primary-red '>Sign Up Now</p>
            </div>

        </div>
    )
}