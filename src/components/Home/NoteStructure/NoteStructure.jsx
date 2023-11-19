import React from 'react'
import css from "./NoteStructure.module.css"

export default function NoteStructure(props) {
  return (
    <div className={`${css.container} border-gray-300`}>
        <p className={`${css.title} text-gray-700`}>
            {props.title} 
        </p>
        <p className={`${css.description} text-gray-500`}>
            {props.description}
        </p>
    </div>
  )
}