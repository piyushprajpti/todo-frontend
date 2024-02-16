import React, { useState } from 'react'
import { faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons'
import InputField from '../InputField/InputField'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { address } from '../url'

export default function ResetPassword() {

    const [renderStep, setRenderStep] = useState(1);
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorColor, setErrorColor] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let url = `${address}/resetpassword`;

    const SendEmail = async () => {

        setErrorMsg("");

        try {
            let result = await axios.post(`${address}/resetpassword`, { email }, {
                headers: { "Content-Type": "application/json" }
            });
            setErrorColor("text-green-500");
            setErrorMsg(result.data)
            setTimeout(() => {
                setErrorMsg("")
            }, 3000);
            setRenderStep(2)
        }
        catch (error) {
            setErrorColor("text-red-500");
            setErrorMsg(error.response.data.message)

            setEmail("");
        }
    };

    const VerifyOTP = async () => {

        try {
            let result = await axios.post(`${address}/fetchotp`, { email, otp }, {
                headers: { "Content-Type": "application/json" }
            });

            if (result.data === "OTP verification successfull") {
                setRenderStep(3)
            }

        } catch (error) {
            setErrorColor("text-red-500")
            setErrorMsg(error.response.data.message)
        }

    }

    const SavePassword = async () => {

        try {
            let result = await axios.post(`${address}/updatepassword`, { email, password, confirmPassword }, {
                headers: { "Content-Type": "application/json" }
            });

            setErrorColor("text-green-500")
            setErrorMsg(result.data)
        } catch (error) {
            setErrorColor("text-red-500")
            setErrorMsg(error.response.data.message)
        }

    }

    const RenderSteps = () => {
        switch (renderStep) {
            case 1:
                return (
                    <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                        <p className='text-3xl font-bold text-gray-700'>Reset Password</p>
                        <p className='text-base pb-5 text-gray-400'>You will receive a OTP to reset password on your registered email address. </p>

                        <InputField
                            icon={faEnvelope}
                            type={"email"}
                            placeholder={"Email Adresss"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <p className={`${errorColor} text-[15px] h-3 ml-1`}>
                            {errorMsg}
                        </p>

                        <Link
                            className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-6`}
                            onClick={() => SendEmail()}
                        >
                            Send Email
                        </Link>
                    </div>
                );

            case 2:
                return (
                    <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                        <p className='text-3xl font-bold text-gray-700'>Enter OTP</p>
                        <p className='text-base pb-5 text-gray-400'>Enter the OTP to verify your account. </p>

                        <InputField
                            icon={faKey}
                            type={"number"}
                            placeholder={"OTP"}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />

                        <div className='flex justify-end mx-1'>
                            <Link className='text-gray-500 underline hover:cursor-pointer active:text-primary-blue md:hover:text-primary-blue' onClick={() => window.location.reload()} >Resend OTP</Link>
                        </div>

                        <p className={`${errorColor} text-[15px] h-3 ml-1`}>
                            {errorMsg}
                        </p>

                        <Link
                            className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-6`}
                            onClick={() => VerifyOTP()}
                        >
                            Verify OTP
                        </Link>
                    </div>
                )

            case 3:
                return (
                    <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                        <p className='text-3xl font-bold text-gray-700'>Create New Password</p>
                        <p className='text-base pb-5 text-gray-400'>Enter the OTP to verify your account. </p>

                        <InputField
                            icon={faLock}
                            type={"password"}
                            placeholder={"New Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isPswd
                        />

                        <InputField
                            icon={faLock}
                            type={"password"}
                            placeholder={"Confirm New Password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            isPswd
                        />

                        <p className={`${errorColor} text-[15px] h-3 ml-1`}>
                            {errorMsg}
                        </p>

                        <Link
                            className={`font-bold text-center text-xl hover:cursor-pointer text-white px-4 py-2 bg-primary-blue rounded-lg md:hover:bg-primary-blue-hover active:bg-primary-blue-hover duration-200 mt-6`}
                            onClick={() => SavePassword()}
                        >
                            Save
                        </Link>
                    </div>
                )
            default:
                return null;
        }
    };

    return (
        <div className='flex flex-col w-full items-center pt-8'>

            {RenderSteps()}

            <div className='w-[90%] md:w-[30%] flex flex-col items-center mt-10'>
                <p className='text-lg text-gray-400 '>Remember your Password?</p>
                <Link className='underline text-lg text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover ' to={'/login'}>Log In</Link>
            </div>

        </div>
    )
}