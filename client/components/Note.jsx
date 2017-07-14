import React from 'react';
import Styles from './styles/Note.scss';


const Note = props => {
  let notes = props.notes;
  const createNote = (note) => {
    return <li key={note.key} className='note'><div className="topBar"><img src="https://s-media-cache-ak0.pinimg.com/originals/77/5e/c9/775ec917700b2efd84501c11128fe813.png"></img><a href="#" className="deleteNoteButton" onClick={() => props.deleteNote(note.key)}>X</a></div><p>{note.text}</p></li>
  }
  let notesArr = notes.map(createNote);

  return (
    <ul id="listContainer">
      {notesArr}
    </ul>
  )
}

export default Note;
