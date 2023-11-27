import React, { useEffect } from 'react'
import css from "./ProfilePage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useState } from 'react'

export default function ProfilePage() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const userid = Cookies.get("userid");

    useEffect(() => {
        if (!userid) navigate("/login");
    }, [userid])

    const local = "https://hedgehog-wondrous-airedale.ngrok-free.app";
    const global = "https://deep-tailor.el.r.appspot.com";

    let url = `${global}/profilepage`;

    const getData = async () => {
        let result;

        try {
            result = await axios.post(url, { userid }, {
                headers: { "Content-Type": "application/json" }
            })

            setName(result.data.name);
            setEmail(result.data.email);

        } catch (error) {
            console.log(error);
        }
    }

    getData();

    const onLogout = async () => {
        Cookies.remove("userid");

    }

    return (
        <div className='flex flex-col w-full items-center pt-8'>

            <div className='flex flex-col w-[90%] md:w-[50%] lg:w-[25%] '>
                <p className='text-3xl font-bold text-gray-700'>Your Info</p>

                <div className={`flex mb-2 mt-8 items-center  `}>
                    <FontAwesomeIcon icon={faUser} className={`text-2xl text-primary-blue`} />
                    <p className={`text-gray-500 text-xl ml-5`}>{name}</p>
                </div>

                <div className={`flex mb-8 mt-2 items-center  `}>
                    <FontAwesomeIcon icon={faEnvelope} className={`text-2xl text-primary-blue`} />
                    <p className={`text-gray-500 text-xl ml-5`}>{email}</p>
                </div>

                <Link
                    className='underline text-xl text-center text-primary-blue hover:cursor-pointer md:hover:text-primary-blue-hover active:text-primary-blue-hover '
                    onClick={() => onLogout()}
                >
                    Log Out
                </Link>
            </div>

        </div>
    )
}
