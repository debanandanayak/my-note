import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import NewNote from "./NewNote";
import getCurrentTime,{instructions} from "./Constants";

export default function Notes() {
    const localNotes = JSON.parse(localStorage.getItem('loaclNotes'))
    const today = getCurrentTime();
    const [noteText, setNoteText] = useState('');
    const [notes, setNotes] = useState(localNotes !== null ? [...localNotes] : instructions);
    function getText(event) {
        setNoteText(() => event.target.value);
        console.log(noteText);
    }
    function addNote() {
        if (noteText === '') {
            return
        } else {
            const myNewNote = { text: noteText, date: today };
            setNotes([...notes, myNewNote]);
            setNoteText("");
        }
    }
    function onDeleteNote(item) {
        notes.splice(notes.indexOf(item), 1);
        setNotes([...notes]);
    }
    localStorage.setItem('loaclNotes', JSON.stringify(notes))
    window.addEventListener('load', function (e) {
        const allNotes=document.querySelectorAll('.note')
        allNotes.forEach((item)=>item.classList.add('load-animation'));
        
    })
    return (
        <div className="container">
            {notes.map(function (note) {
                return (
                    <Item
                        notes={note}
                        onDeleteNote={() => onDeleteNote(note)}
                        key={uuidv4()}
                    />
                );
            })}
            <NewNote addNote={addNote} onChange={getText} value={noteText} />
        </div>
    );
}
