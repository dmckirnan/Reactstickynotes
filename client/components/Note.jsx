import React from 'react';
import Styles from '../styles/Note.scss';
import Draggable from 'react-draggable';

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
  return (
    // <Draggable handle="strong">
    //   <div className="box no-cursor">
    //     <strong className="cursor">Drag</strong>
    <div id="noteContainer">
      <div className="deleteNoteContainer">
        <button className="deleteNoteButton" onClick={() => props.deleteNote(props.id)}>X</button>
      </div>
      <h2>{props.title}</h2>
      {/*<div className="textEditContainer">
        <input className="noteText" type="text" value={props.notes.text} onChange={props.textHandler}></input>
      </div>*/}
      <div className="textContainer">
        <p className="text">{props.text}</p>
      </div>
      <div className="editContainer">
        <button className="editButton" onClick={props.toggleModal}>Edit</button>
      </div>
    </div>
    //   </div>
    // </Draggable>
  )
}

export default Note;