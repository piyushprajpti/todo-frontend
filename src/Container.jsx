import React from 'react'
import Header from './components/Header'
import AddNote from './components/AddNote/AddNote'
import LoginPage from './components/LoginPage/LoginPage'
import SignupPage from './components/SignupPage/SignupPage'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'

export default function Container() {
  return (
    <div className='w-screen h-screen'>
        <Header />

        <Routes>
            <Route path={'/'} element={<Home />} />   
            <Route path={'/login'} element={<LoginPage />} />   
            <Route path={'/signup'} element={<SignupPage />} />   
        </Routes>

        <AddNote />
    </div>
  )
}

