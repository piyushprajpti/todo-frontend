import React from 'react'
import Header from './components/Header'
import LoginPage from './components/LoginPage/LoginPage'
import SignupPage from './components/SignupPage/SignupPage'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ResetPassword from './components/ResetPassword/ResetPassword'
import AddNoteScreen from './components/AddNote/AddNoteScreen'
import { useState } from 'react'
import CreatePassword from './components/ResetPassword/CreatePassword'
import ProfilePage from './components/ProfilePage/ProfilePage'

export default function Container() {

    const [shouldShowAddNoteScreen, setShouldShowAddNoteScreen] = useState(false);
    const [noteDetails, setNoteDetails] = useState({ noteid: "", title: "", description: "" })

    return (
        <div className='w-screen h-full'>
            {
                shouldShowAddNoteScreen && <AddNoteScreen
                    onBackClick={() => setShouldShowAddNoteScreen(false)}
                    noteid={noteDetails.noteid}
                    title={noteDetails.title}
                    description={noteDetails.description}
                />
            }

            <Header />

            <Routes>
                <Route path={'/'} element={<Home
                    setShouldShowAddNoteScreen={(noteid, title, description) => {
                        setNoteDetails({ noteid, title, description })
                        setShouldShowAddNoteScreen(true)
                    }}
                />}
                />
                <Route path={'/login'} element={<LoginPage />} />
                <Route path={'/signup'} element={<SignupPage />} />
                <Route path={'/resetpassword'} element={<ResetPassword />} />
                <Route path={'/profilepage'} element={<ProfilePage />} />

            </Routes>
        </div>
    )
}