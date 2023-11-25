import React, { useState } from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import InputField from '../InputField/InputField'
import { Link } from 'react-router-dom'

export default function ResetPassword() {

    const [email, setEmail] = useState("");

    const local = "https://hedgehog-wondrous-airedale.ngrok-free.app";
    const global = "https://deep-tailor.el.r.appspot.com";

    let url = `${local}/resetpassword`;

    const onSubmit = async () => {
        
    }

    return (
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Reset Password</p>
                <p className='text-base pb-5 text-gray-400'>You will receive a link to reset password on your registered email. </p>

                <InputField
                    icon={faEnvelope}
                    type={"email"}
                    placeholder={"Email Adresss"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Link
                    className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-6`}
                    onClick={() => onSubmit()}
                >
                    Send Email
                </Link>
            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Remember your Password?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'}>Log In</Link>
            </div>

        </div>
    )
}
