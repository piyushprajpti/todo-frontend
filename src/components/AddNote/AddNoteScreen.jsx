import React, { useState } from 'react'
import css from "./AddNoteScreen.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {address} from '../url'


export default function AddNoteScreen(props) {

    const userid = localStorage.getItem("userid");

    const [data, setData] = useState({
        userid: userid,
        noteid: props.noteid,
        title: props.title,
        description: props.description
    });

    let saveurl = `${address}/addnote`;
    let deleteurl = `${address}/deletenote`;

    const onDelete = async () => {
        try {
            let result = await axios.post(deleteurl, data, {
                headers: { "Content-Type": "application/json" }
            })

            console.log(result);
        } catch (error) {
            console.log(error);
        }

        window.location.reload();
    }

    const onSave = async () => {
        try {
            let result = await axios.post(saveurl, data, {
                headers: { "Content-Type": "application/json" }
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }

        window.location.reload();
    }

    return (
        <div className={`${css.container} flex fixed w-full h-full z-50 duration-200`}>

            <div className={`${css.wrapper}`}>

                <div className={`${css.header} text-2xl text-gray-600`}>

                    <Link>
                        <FontAwesomeIcon icon={faArrowLeft} className={`${css.backArrow} `} onClick={props.onBackClick} />
                    </Link>

                    <div className='flex items-center'>
                        <Link onClick={() => onDelete()}>
                            <FontAwesomeIcon icon={faTrash} className={`${css.deleteIcon} text-xl `} />
                        </Link>
                        <Link
                            className={`${css.saveText} text-xl ml-6 mr-2`}
                            onClick={() => onSave()}
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