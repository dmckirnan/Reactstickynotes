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

    this.openModal = this.openModal.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(e) {
    let notes = this.state.notes;
    notes.push({ text: this.note.value, key: Date.now() });
    this.setState({ notes: notes });
    this.note.value = "";
    e.preventDefault();
  }

  deleteNote(e) {
    let notes = this.state.notes;
    notes = notes.filter(x => {
      return x.key !== e;
    });
    this.setState({ notes: notes });
  }

  openModal() {
    const text = this.refs.input.value;
    ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
  }

  // openModal() {
  //   this.setState({ modal: true });
  // }

  // closeModal() {
  //   this.setState({ modal: false });
  // }

  render() {
    if (this.state.modal === false) {
      return (
        <div id="board">
          <h1 id="title"> Stick It to Me</h1>
          <div id="addNoteContainer" style={Styles.addNoteContainer}>
            <form onSubmit={this.addNote}>
              <input ref={(a) => this.note = a} placeholder="Do the Dishes"></input>
              <button id='addNoteButton'>Add Sticky</button>
            </form>
          </div>
          <Note notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}
            toggleModal={this.toggleModal} openModal={this.openModal} />
        </div>
      )
    }
    if (this.state.modal === true) {
      return (
        <Note notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}
          toggleModal={this.toggleModal} openModal={this.openModal} />
      )
    }
  }
}

export default Board;
