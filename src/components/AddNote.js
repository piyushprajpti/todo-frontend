import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddNote() {
  return (
    <div className='fixed bottom-10 right-10 flex justify-center items-center'>
        <p className='text-4xl text-white bg-primary-red px-4 py-2.5 rounded-2xl md:hover:bg-primary-red-hover hover:cursor-pointer active:bg-primary-red-hover'>
            <FontAwesomeIcon icon={faPlus} />
        </p>
    </div>
  )
}
