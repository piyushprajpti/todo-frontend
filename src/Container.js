import React from 'react'
import Header from './components/Header'
import AddNote from './components/AddNote'
import AccountPage from './components/AccountPage'

export default function Container() {
  return (
    <div className='w-full h-screen'>
        <Header />
        <AccountPage />
        <AddNote />
    </div>
  )
}

