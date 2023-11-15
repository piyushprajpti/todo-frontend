import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function SignupPage() {
    return (
        <div className='flex flex-col items-center w-full pt-10 '>
            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%]  '>

                <p className='text-3xl font-bold pb-10 text-gray-700'>Create New Account.</p>

                <div className='flex my-2'>
                    <p className='justify-center items-center flex px-3 border-solid border-primary-blue border-2 rounded-l-lg text-primary-blue text-lg w-14'>
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className='w-full outline-none text-lg p-2 pl-4 border-solid border-gray-300 focus:border-primary-blue border-2 rounded-r-lg border-l-0'
                    />
                </div>

                <div className='flex my-2'>
                    <p className='justify-center items-center flex px-3 border-solid border-primary-blue border-2 rounded-l-lg text-primary-blue text-lg w-14'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </p>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className='w-full outline-none text-lg p-2 pl-4 border-solid border-gray-300 focus:border-primary-blue border-2 rounded-r-lg border-l-0'
                    />
                </div>

                <div className='flex my-2'>
                    <p className='justify-center items-center flex px-3 border-solid border-primary-blue border-2 rounded-l-lg text-primary-blue text-lg w-14'>
                        <FontAwesomeIcon icon={faLock} />
                    </p>
                    <input
                        type="password"
                        placeholder="Password"
                        className='w-full outline-none text-lg p-2 pl-4 border-solid border-gray-300 focus:border-primary-blue border-2 rounded-r-lg border-l-0'
                    />
                </div>

                <div className='flex my-2'>
                    <p className='justify-center items-center flex px-3 border-solid border-primary-blue border-2 rounded-l-lg text-primary-blue text-lg w-14'>
                        <FontAwesomeIcon icon={faLock} />
                    </p>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className='w-full outline-none text-lg p-2 pl-4 border-solid border-gray-300 focus:border-primary-blue border-2 rounded-r-lg border-l-0'
                    />
                </div>

                <p className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-8`}>Sign Up</p>

            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Already have an account?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'} >Log In Now</Link>
            </div>

        </div>
    )
}
