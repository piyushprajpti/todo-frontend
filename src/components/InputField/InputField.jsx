import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import css from './inputField.module.css'

export default function InputField(props) {

    const [shouldShowPassword, setShouldShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");

    const togglePasswordVisibility = () => {
        shouldShowPassword ? setInputType("password") : setInputType("text");
        setShouldShowPassword(!shouldShowPassword);
    }

    return (
        <div className='flex my-2'>
            <div className='flex justify-center items-center px-3 border-solid border-primary-blue border-2 rounded-l-lg text-primary-blue text-lg min-w-[56px]'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <div className={`${css.parentDiv} flex items-center p-2 border-solid bg-white border-gray-300 border-2 rounded-r-lg border-l-0 w-full`}>
                <input
                    type={props.isPswd ? inputType : props.type}
                    placeholder={props.placeholder}
                    className={`${css.input} flex-1 w-full outline-none indent-2 text-gray-800`}
                    value={props.value}
                    onChange={(e) => props.onChange(e)}
                />

                {
                    props.isPswd &&
                    <FontAwesomeIcon icon={shouldShowPassword ? faEye : faEyeSlash} className=' text-gray-500 text-lg cursor-pointer mx-1' onClick={togglePasswordVisibility} />
                }
            </div>
        </div>
    )
}
