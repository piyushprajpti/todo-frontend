import React, { useState } from 'react'
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import InputField from '../InputField/InputField'
import axios from 'axios'

export default function SignupPage() {

    const [errorMsg, setErrorMsg] = useState("");
    const [errorColor, setErrorColor] = useState("text-red-500");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const local = "https://hedgehog-wondrous-airedale.ngrok-free.app";
    const global = "https://deep-tailor.el.r.appspot.com";

    let url = `${local}/signup`;

    const onSubmit = async () => {

        setErrorMsg("");

        try {
            let result = await axios.post(url, data, {
                headers: { "Content-Type": "application/json" }
            })
            setErrorColor("text-green-500");
            setErrorMsg(result.data);
            setData({
                email: "",
                otp: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            setErrorColor("text-red-500");
            if (error.code === "ERR_NETWORK") setErrorMsg("Server unreachable");
            else if (error.response) setErrorMsg(error.response.data)
            else setErrorMsg(error.message);
        }
    }

    return (
        <div className='flex flex-col items-center w-full pt-8'>
            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%]'>

                <p className='text-3xl font-bold pb-5 text-gray-700'>Create New Account.</p>

                <InputField
                    icon={faUser}
                    type={"text"}
                    placeholder={"Your Name"}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />

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

                <InputField
                    icon={faLock}
                    type={"password"}
                    placeholder={"Confirm Password"}
                    value={data.confirmPassword}
                    onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                    isPswd
                />

                <p className={`${errorColor} text-[15px] h-5 ml-1`}>
                    {errorMsg}
                </p>

                <Link
                    className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-6`}
                    onClick={() => onSubmit()}
                >
                    Sign Up
                </Link>

            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Already have an account?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'} >Log In Now</Link>
            </div>

        </div>
    )
}
