import React from 'react'
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import InputField from '../InputField/InputField'

export default function SignupPage() {

    const PswdVisibility = () => {

    }

    return (
        <div className='flex flex-col items-center w-full pt-8'>
            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%]'>

                <p className='text-3xl font-bold pb-5 text-gray-700'>Create New Account.</p>

                <InputField icon={faUser} type={"text"} placeholder={"Your Name"} />

                <InputField icon={faEnvelope} type={"email"} placeholder={"Email Adresss"} />

                <InputField icon={faLock} type={"password"} placeholder={"Password"} isPswd />

                <InputField icon={faLock} type={"password"} placeholder={"Confirm Password"} isPswd />
                
                <p className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-8`}>Sign Up</p>

            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Already have an account?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'} >Log In Now</Link>
            </div>

        </div>
    )
}
