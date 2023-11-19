import React from 'react'
import css from "./AddNoteScreen.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function AddNoteScreen(props) {

    return (
        <div className={`${css.container} flex fixed w-full h-full z-50 duration-200`}>

            <div className={`${css.wrapper}`}>

                <div className={`${css.header} text-2xl text-gray-600`}>

                    <FontAwesomeIcon icon={faArrowLeft} className={`${css.backArrow} `} onClick={props.onBackClick}  />

                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faTrash} className={`${css.deleteIcon} text-xl `} />
                        <p className={`${css.saveText} text-xl ml-6 mr-2`}>Save</p>
                    </div>

                </div>

                <textarea type="text" placeholder='Title' className={`${css.title} `} />

                <textarea type="text" placeholder='Description' className={`${css.description} `} />

            </div>
        </div>
    )
}
