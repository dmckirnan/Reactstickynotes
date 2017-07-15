import React, { Component } from 'react';
import Note from './Note.jsx';

import Styles from './styles/styles.scss';
import NoteStyles from './styles/Note.scss';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.openNote = this.openNote.bind(this);
  }

  addNote(e) {
    // Make a Copy of State 
    const obj = Object.assign({}, this.state);

    let notes = obj.notes;
    notes.push({ text: this.note.value, key: Date.now(), name: 'none' });
    this.setState({ notes: notes });

    // Reset Input Field / Prevent Page Reload
    this.note.value = "";
    e.preventDefault();
  }

  deleteNote(e) {
    // Make a Copy of State 
    const obj = Object.assign({}, this.state);

    let notes = obj.notes;
    notes = notes.filter(x => {
      return x.key !== e;
    });
    this.setState({ notes: notes });
  }

  openNote (e) {
    // Make a Copy of State
    const obj = Object.assign({}, this.state);

    let notes = obj.notes;
    notes = notes.map(x => {
      if (x.key === e) x.name === 'note' ? x.name = 'none' : x.name = 'note';
      return x;
    });
    this.setState({ notes: notes });
  }

  render() {
      return (
        <div id="board">
          <h1 id="title"> Stick It to Me</h1>
          <div id="addNoteContainer" style={Styles.addNoteContainer}>
            <form onSubmit={this.addNote}>
              <input ref={(a) => this.note = a} placeholder="Do the Dishes"></input>
              <button id='addNoteButton'>Add Sticky</button>
            </form>
          </div>
          <Note openNote={this.openNote} notes={this.state.notes} deleteNote={this.deleteNote} />
        </div>
      )
    }
}

export default Board;
