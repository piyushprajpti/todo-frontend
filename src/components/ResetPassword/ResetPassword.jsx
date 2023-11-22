import React, { useState } from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import InputField from '../InputField/InputField'
import { Link } from 'react-router-dom'

export default function ResetPassword() {

    const [data, setdata] = useState({ email: "" });

    return (
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Reset Password</p>
                <p className='text-base pb-5 text-gray-400'>You will receive a link to reset password on your registered email. </p>

                <InputField
                    icon={faEnvelope}
                    type={"email"}
                    placeholder={"Email Adresss"}
                    value={data.email}
                    onChange={(e) => setdata({ ...data, email: e.target.value })}
                />

                <p className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-8`}>Send Email</p>
            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Remember your Password?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'}>Log In</Link>
            </div>

        </div>
    )
}
