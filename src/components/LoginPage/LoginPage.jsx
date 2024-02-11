import React, { useState } from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../InputField/InputField'
import axios from 'axios'
import {address} from '../url'

export default function LoginPage() {

    const [errorMsg, setErrorMsg] = useState("");
    const [errorColor, setErrorColor] = useState("text-red-500");

    const navigate = useNavigate();
    
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    let url = `${address}/login`;

    const onSubmit = async () => {

        setErrorMsg("");
        try {

            let result = await axios.post(url, data, {
                headers: { "Content-Type": "application/json" }
            })

            localStorage.setItem("userid", result.data._id);
            setErrorColor("text-green-500");
            setErrorMsg("Login successfull.");

            navigate("/");
        } catch (error) {

            setErrorColor("text-red-500");

            if (error.code === "ERR_NETWORK") setErrorMsg("Server unreachable");
            else if (error.response) setErrorMsg(error.response.data)
            else setErrorMsg(error.message);
            console.log(error.message)
        }
    }

    return (
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Welcome Back!</p>
                <p className='text-base pb-5 text-gray-400'>Login to view your saved notes. </p>

                <InputField
                    icon={faEnvelope}
                    type={"email"}
                    placeholder={"Email Adresss"}
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <InputField
                    icon={faLock}
                    type={"password"}
                    placeholder={"Password"}
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    isPswd
                />

                <div className='flex justify-end mx-1'>
                    <Link className='text-gray-500 underline hover:cursor-pointer active:text-primary-blue md:hover:text-primary-blue' to={'/resetpassword'} >Reset Password</Link>
                </div>

                <p className={`${errorColor} text-[15px] h-5 ml-1 `}>
                    {errorMsg}
                </p>

                <Link
                    className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-4`}
                    onClick={() => onSubmit()}
                >
                    Log In
                </Link>
            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Don't have an account?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/signup'}>Sign Up Now</Link>
            </div>

        </div>
    )
}