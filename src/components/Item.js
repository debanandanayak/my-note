import React from 'react'
import Cross from './Cross.svg'

export default function Item({ notes, onDeleteNote }) {
    return (
        <div className="note item" >
                <span>{notes.text}</span>
            <footer>
                <small>{notes.date}</small>
                <img src={Cross} alt="Delete Icon" onClick={onDeleteNote} />
            </footer>
        </div>
    )
}
