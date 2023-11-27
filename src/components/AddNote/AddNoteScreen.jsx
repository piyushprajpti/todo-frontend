import React, { useState } from 'react'
import css from "./AddNoteScreen.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function AddNoteScreen(props) {

    const userid = Cookies.get("userid");

    const [data, setData] = useState({
        userid: userid,
        title: "",
        description: ""
    });

    const local = "https://hedgehog-wondrous-airedale.ngrok-free.app";
    const global = "https://deep-tailor.el.r.appspot.com";

    let url = `${local}/addnote`;

    const onSubmit = async () => {
        try {
            let result = await axios.post(url, data, {
                headers: { "Content-Type": "application/json" }
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`${css.container} flex fixed w-full h-full z-50 duration-200`}>

            <div className={`${css.wrapper}`}>

                <div className={`${css.header} text-2xl text-gray-600`}>

                    <Link>
                        <FontAwesomeIcon icon={faArrowLeft} className={`${css.backArrow} `} onClick={props.onBackClick} />
                    </Link>

                    <div className='flex items-center'>
                        <Link>
                            <FontAwesomeIcon icon={faTrash} className={`${css.deleteIcon} text-xl `} />
                        </Link>
                        <Link
                            className={`${css.saveText} text-xl ml-6 mr-2`}
                            onClick={() => onSubmit()}
                        >
                            Save
                        </Link>
                    </div>

                </div>

                <textarea
                    type="text"
                    placeholder='Title'
                    className={`${css.title} `}
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />

                <textarea
                    type="text"
                    placeholder='Description'
                    className={`${css.description} `}
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                />

            </div>
        </div>
    )
}