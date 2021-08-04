import getCurrentTime from './Constants'
export default function NewNote({addNote,onChange,value}) {
    return (
        <div className="note new">
            <textarea name="" id="" cols="50" rows="6" placeholder="Add your new note here..." onChange={onChange} value={value}></textarea>
            <footer>
                <small>{getCurrentTime()}</small>
                <button className="save" onClick={addNote}>Save</button>
            </footer>
        </div>
    )
}
