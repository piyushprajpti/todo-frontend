import React, { useEffect } from 'react'
import NoteStructure from './NoteStructure/NoteStructure'
import AddNoteButton from '../AddNote/AddNoteButton'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

    const navigate = useNavigate();
    
    const isUseridAvailable = Cookies.get("userid");

    useEffect(()=>{
        isUseridAvailable ? console.log(isUseridAvailable) : navigate("/login");
    },[]);

    return (
       <>
         <div className='flex w-full py-5 flex-col'>
            <div className='flex flex-wrap mx-3 md:justify-start justify-center'>

                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf s"} />
                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf s"} />
                <NoteStructure title={"Today's tasks"} description={""} />
                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf s"} />
                <NoteStructure title={""} description={"loremsfsdbfsdjkhf s"} />

                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkdf hgfsd hasdf asdfgasdf sdf s"} />
                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkdf hgfsd hasdf asdfgasdf sdf s"} />

                <NoteStructure title={"Today's tasks"} description={"loremsf dfg dgd d df s"} />
                <NoteStructure title={"Today's tasks"} description={"loremsf dfg dgd d df s"} />

                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf sdus jkfhsdk sdf sdhgfsd hsdf hgfsd hasdf asdfgasdf sdf s"} />
                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf sdus jkfhsdk sdf sdhgfsd hsdf hgfsd hasdf asdfgasdf sdf s"} />

                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf sdus jkfhsdk sdf sdhgfsd hsdf hgfsd hasdf asdfgasdf sdf s"} />
                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf sdus jkfhsdk sdf sdhgfsd hsdf hgfsd hasdf asdfgasdf sdf s"} />

                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf sdus jkfhsdk sdf sdhgfsd hsdf hgfsd hasdf asdfgasdf sdf s"} />
                <NoteStructure title={"Today's tasks"} description={"loremsfsdbfsdjkhf sdus jkfhsdk sdf sdhgfsd hsdf hgfsd hasdf asdfgasdf sdf s"} />


            </div>
        </div>

        <AddNoteButton onClick={() => props.setShouldShowAddNoteScreen(true)} />
       </>
    )
}