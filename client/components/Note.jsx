import React from 'react';
import Styles from '../styles/styles.scss';

/*

  Current Role of Note:

  1) Serves as the Note Component Rendered with every new Note Creation
  2) Renders DeleteNote Button
  3) Renders Edit Button which Toggles Modal View
  4) Renders NoteController (Use not Defined Yet)


  Current Issues:

  1) Notes Array is Not Being Passed Down Correctly
  2) Need Decision on Proper Way to Manage Add/Removal as well as tracking Indexes
  3) No Modal Animation or functional Modal yet

*/

const Note = props => {
  return (
    <div id="noteContainer">
      <div className="deleteNoteContainer">
        <button className="deleteNoteButton" onClick={props.deleteNote}>X</button>
      </div>
      <input className="noteText" type="text" value={props.notes.text} onChange={props.textHandler}></input>
      <button className="editButton" onClick={props.toggleModal}>Edit</button>
      {/*<div className="noteTextDisplay">{props.notes.text}</div>*/}
    </div>
  )
}

export default Note;