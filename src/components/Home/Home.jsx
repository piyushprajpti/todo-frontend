import React, { useEffect, useState } from 'react'
import NoteStructure from './NoteStructure/NoteStructure'
import AddNoteButton from '../AddNote/AddNoteButton'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { address } from '../url'

export default function Home(props) {

    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const userid = localStorage.getItem("userid");

    let url = `${address}/`;

    useEffect(() => {
        if (!userid) navigate("/login");

        const fetchNotes = async () => {

            let result;

            try {
                result = await axios.post(url, { userid }, {
                    headers: { "Content-Type": "application/json" }
                })

                setNotes(result.data);
                // console.log(result.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNotes();
    }, [navigate]);


    return (
        <>
            <div className='flex w-full py-5 flex-col'>
                {notes.length === 0 ? (
                    <p className='flex flex-wrap mx-3 justify-center text-xl text-gray-400 text-center'>
                        No notes available. Add a new note using the <span className='text-primary-blue mx-2 font-bold'> + </span> button below.
                    </p>

                ) : (
                    <div className='flex flex-wrap mx-3 md:justify-start justify-center'>
                        {notes.map((note) => (
                            <NoteStructure
                                key={note._id}
                                title={note.title} 
                                description={note.description}
                                onClick={() => props.setShouldShowAddNoteScreen(note._id, note.title, note.description)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <AddNoteButton onClick={() => props.setShouldShowAddNoteScreen("", "", "")} />
        </>
    )
}