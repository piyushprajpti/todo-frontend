import React from 'react'
import Header from './components/Header'
import LoginPage from './components/LoginPage/LoginPage'
import SignupPage from './components/SignupPage/SignupPage'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ResetPassword from './components/ResetPassword/ResetPassword'
import AddNoteScreen from './components/AddNote/AddNoteScreen'
import { useState } from 'react'

export default function Container() {

    const [shouldShowAddNoteScreen, setShouldShowAddNoteScreen] = useState(false);

    return (
        <div className='w-screen h-screen'>
            {
                shouldShowAddNoteScreen && <AddNoteScreen onBackClick={() => setShouldShowAddNoteScreen(false)} />
            }
            <Header />

            <Routes>
                <Route path={'/'} element={<Home setShouldShowAddNoteScreen={setShouldShowAddNoteScreen} />} />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/signup'} element={<SignupPage />} />
                <Route path={'/resetpassword'} element={<ResetPassword />} />
            </Routes>
        </div>
    )
}