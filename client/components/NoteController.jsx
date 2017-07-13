import React from 'react';
import Note from './Note.jsx';
import Styles from '../styles.scss';

const NoteController = props => {

  const noteArray = props.notesArray.map((note, index) => {
    return <Note 
    deleteNote={this.deleteNote} 
    editHandler={this.editHandler} 
    textHandler={this.textHandler} 
    noteText={this.state.noteText} 
    notes={this.state.notes} />
  });

  return (
    <div id="noteController">
      {noteArray}
    </div>
  )
}

export default NoteController;