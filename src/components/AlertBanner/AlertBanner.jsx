import React from 'react'
import css from "./AlertBanner.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function AlertBanner() {

    return (
        <div className={`${css.container}`}>

            <div className={`${css.iconContainer}`}>
                <FontAwesomeIcon icon={faCheck} className={`${css.icon}`} />
            </div>

            <div className={`${css.msgContainer}`}>
                <p>Success!</p>
                <p>Account created successfully</p>
            </div>
        </div>
    )
}
