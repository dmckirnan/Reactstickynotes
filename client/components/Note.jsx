import React from 'react';
import Styles from '../styles.scss';
import DeleteNote from './DeleteNote.jsx';
import NoteController from './NoteController.jsx';

const StickyNote = props => {
  return (
    <div id="noteContainer">
      <div id="noteController">
        <NoteController notesArray={props.notes}/>
      </div>
      <div className="deleteNoteContainer">
        <DeleteNote deleteNote={props.deleteNote} notes={props.notes} />
      </div>
      <input className="noteText" type="text" value={props.noteText} onChange={props.textHandler}></input>
      <button className="editButton" onClick={() => props.editHandler()}>Edit</button>
      <div className="noteTextDisplay">{props.stickyText}</div>
    </div>
  )
}

export default StickyNote;