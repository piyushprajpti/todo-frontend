import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddNoteButton(props) {

  return (
    <div onClick={props.onClick} className='fixed bottom-10 right-10 flex justify-center items-center'>
        <div className='text-4xl text-white bg-primary-blue px-4 py-2.5 rounded-2xl md:hover:bg-primary-blue-hover hover:cursor-pointer active:bg-primary-blue-hover'>
            <FontAwesomeIcon icon={faPlus} />
        </div>
    </div>
  )
}
