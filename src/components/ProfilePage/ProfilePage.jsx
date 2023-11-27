import React, { useEffect } from 'react'
import css from "./ProfilePage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function ProfilePage() {

    const navigate = useNavigate();

    const isUseridAvailable = Cookies.get("userid");

    useEffect(() => {
        isUseridAvailable ? console.log(isUseridAvailable) : navigate("/login");
    }, [isUseridAvailable])


    const onSubmit = () => {
        Cookies.remove("userid");
    }

    return (
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Your Info</p>

                <div className={`flex mb-2 mt-8 items-center`}>
                    <FontAwesomeIcon icon={faUser} className={`text-2xl text-primary-blue`} />
                    <p className={`text-gray-500 text-xl ml-5`}>Piyush Prajapati</p>
                </div>

                <div className={`flex mb-8 mt-2 items-center`}>
                    <FontAwesomeIcon icon={faEnvelope} className={`text-2xl text-primary-blue`} />
                    <p className={`text-gray-500 text-xl ml-5`}>piyush@gmail.com</p>
                </div>

                <Link
                    className='underline text-xl text-center text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover '
                    onClick={() => onSubmit()}
                >
                    Log Out
                </Link>
            </div>

        </div>
    )
}
