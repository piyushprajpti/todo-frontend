import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import logo from "../image/logo.png"

export default function Header() {

    return (
        <div className='w-full h-16 shadow-[0_0_3px_0px_#0000003d] flex items-center justify-between px-6 md:px-12 '>

            <Link className='flex' to={'/'} >
                <img src={logo} alt="" className='w-8 mr-1' />
                <p className='font-bold text-3xl hover:cursor-pointer text-primary-blue' >
                    ToDo
                </p>
            </Link>

            <Link to={'/profilepage'}>
                <FontAwesomeIcon icon={faUser} className='hover:cursor-pointer text-2xl active:bg-gray-200 px-3 py-2.5 rounded-full' />
            </Link>

        </div>
    )
}