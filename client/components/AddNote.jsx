import React from 'react';
import Styles from '../styles.scss';

const AddNote = props => {
  return (
    <div>
      <button id='addNoteButton' onClick={props.AddButton}>Add A Note</button>
    </div>
  )
}

export default AddNote;