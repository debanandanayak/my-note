import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import NewNote from "./NewNote";
import getCurrentTime from "./Time";

export default function Notes() {
    localStorage.mobile='mobile';
    const localNotes = JSON.parse(localStorage.getItem('loaclNotes'))
    const today = getCurrentTime();
    const [noteText, setNoteText] = useState("");
    const [notes, setNotes] = useState(localNotes!==null?[...localNotes]:[]);
    function getText(event) {
        setNoteText(event.target.value);
        // setNoteHeading(event.target.value)
    }
    function addNote() {
        const myNewNote = { text: noteText, date: today };
        setNotes([...notes, myNewNote]);
        setNoteText("");
    }
    function onDeleteNote(item) {
        notes.splice(notes.indexOf(item), 1);
        setNotes([...notes]);
    }
    window.addEventListener('beforeunload', function (e) {
        localStorage.setItem('loaclNotes', JSON.stringify(notes))
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
