import React from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import InputField from '../InputField/InputField'

export default function LoginPage() {
    return (
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Welcome Back!</p>
                <p className='text-base pb-5 text-gray-400'>Login to view your saved notes. </p>

                <InputField icon={faEnvelope} type={"email"} placeholder={"Email Adresss"} />

                <InputField icon={faLock} type={"password"} placeholder={"Password"} isPswd />

                <div className='flex justify-between mx-1'>
                    <p className='text-red-500 '></p>
                    <Link className='text-gray-500 underline hover:cursor-pointer active:text-primary-blue md:hover:text-primary-blue' to={'/resetpassword'} >Reset Password</Link>
                </div>

                <p className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-8`}>Log In</p>
            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Don't have an account?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/signup'}>Sign Up Now</Link>
            </div>

        </div>
    )
}