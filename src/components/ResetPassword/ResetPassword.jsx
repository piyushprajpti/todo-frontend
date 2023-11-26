import React, { useState } from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import InputField from '../InputField/InputField'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ResetPassword() {

    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorColor, setErrorColor] = useState("");

    const local = "https://hedgehog-wondrous-airedale.ngrok-free.app";
    const global = "https://deep-tailor.el.r.appspot.com";

    let url = `${local}/resetpassword`;
    const onSubmit = async () => {

        setErrorMsg("");

        try {
            if (email.trim() === "" || email.indexOf("@") === -1) {
                throw {message: "Invalid email address"};
            }

            let result = await axios.post(url, { email }, {
                headers: { "Content-Type": "application/json" }
            })
            setErrorColor("text-green-500");
            setErrorMsg(result.data);

        } catch (error) {
            setErrorColor("text-red-500");
            if (error.code === "ERR_NETWORK") setErrorMsg("Server unreachable");
            else if (error.response) setErrorMsg(error.response.data)
            else setErrorMsg(error.message);
        }
        setEmail("");
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

                <p className={`${errorColor} text-[15px] h-5 ml-1`}>
                    {errorMsg}
                </p>

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
