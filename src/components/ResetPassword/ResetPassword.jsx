import React, { useState } from 'react'
import { faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons'
import InputField from '../InputField/InputField'
import { Link } from 'react-router-dom'
import axios from 'axios'
import css from "./ResetPassword.module.css"

export default function ResetPassword() {

    const [errorMsg, setErrorMsg] = useState("");
    const [errorColor, setErrorColor] = useState("text-red-500");

    const [data, setData] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
    });
    data.otp = data.otp.slice(0, 4);

    const local = "https://hedgehog-wondrous-airedale.ngrok-free.app";
    const global = "https://deep-tailor.el.r.appspot.com";

    let url = `${local}/resetpassword`;

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
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Reset Password</p>
                <p className='text-base pb-5 text-gray-400'>You will receive a OTP to reset password on your registered email. </p>

                <InputField
                    icon={faEnvelope}
                    type={"email"}
                    placeholder={"Email Adresss"}
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <div className='flex justify-between'>
                    <div className='w-[60%]'>
                        <InputField
                            icon={faKey}
                            type={"number"}
                            placeholder={"OTP"}
                            value={data.otp}
                            onChange={(e) => setData({ ...data, otp: e.target.value })}
                        />
                    </div>

                    <Link
                        className={`font-semibold w-[40%] items-center justify-center flex hover:cursor-pointer text-white py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 my-2 ml-2`}
                    >
                        Get OTP
                    </Link>
                </div>

                <InputField
                    icon={faLock}
                    type={"password"}
                    placeholder={"New Password"}
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    isPswd
                />

                <InputField
                    icon={faLock}
                    type={"password"}
                    placeholder={"Confirm New Password"}
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
                    Submit
                </Link>
            </div>

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Remember your Password?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'}>Log In</Link>
            </div>

        </div>
    )
}
