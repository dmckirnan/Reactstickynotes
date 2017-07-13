import React from 'react';
import Styles from '../styles.scss';

const DeleteNote = props => {
  return (
    <div>
      <button className="deleteNoteButton" onClick={() => props.deleteNote(props.index)}>X</button>
    </div>
  )
}

export default DeleteNote;