import React from 'react';
import Styles from './styles/Note.scss';
// import Draggable from 'react-draggable';

/*

  Current Role of Note:

  1) Serves as the Note Component Rendered with every new Note Creation
  2) Renders DeleteNote Button
  3) Renders Edit Button which Toggles Modal View


  Current Issues:

  1) Indexing system may lead to issues at scale
  2) Indexes do not readjust upon delete
  3) No Modal Animation or functional Modal yet

*/

const Note = props => {

  let notes = props.notes;
  const createNote = (note) => {
    return <li key={note.key} className='note'><img src="https://s-media-cache-ak0.pinimg.com/originals/77/5e/c9/775ec917700b2efd84501c11128fe813.png"></img><button className="deleteNoteButton" onClick={() => props.deleteNote(note.key)}><p>X</p></button>{note.text}</li>
  }
  let notesArr = notes.map(createNote);

  return (
    <ul id="listContainer">
      {notesArr}
    </ul>
  )
}

export default Note;