import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='w-full h-16 shadow-[0_0_3px_0px_#0000003d] flex items-center justify-between px-6 md:px-12 '>

            <Link className='font-bold text-3xl hover:cursor-pointer text-primary-blue' to={'/'}>
                ToDo
            </Link>

            <Link to={"/login"}>
                <FontAwesomeIcon icon={faUser} className='md:hidden hover:cursor-pointer text-2xl active:bg-gray-200 px-3 py-2.5 rounded-full' />
            </Link> 

            <div className='hidden md:flex items-center '>
                <Link
                    className={`font-bold mr-5 hover:cursor-pointer hover:text-primary-blue text-gray-700 `}
                    to={"/login"}
                >
                    Log In
                </Link>
                <Link
                    className={`font-bold ml-5 hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg hover:bg-primary-blue-hover duration-200`}
                    to={"/signup"}
                >
                    Sign Up
                </Link>
            </div>

        </div>
    )
}