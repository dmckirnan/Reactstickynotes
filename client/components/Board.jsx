import React, { Component } from 'react';
import $ from 'jquery';
import Draggable from 'react-draggable';

import Modal from './Modal.jsx';
import Note from './Note.jsx';
import Styles from './styles/styles.scss';
import NoteStyles from './styles/Note.scss';


/*
  Current Role of Board:

  1) Parent Component / Top Level Component / State Store
  2) Contains All Necessary Methods for Note Add, Remove, Text Edit, Modal Toggle, Animation
  3) Renders AddNoteButton, Note, and Modal

  Current Issues:

  1) Lacks Styling
  2) Modal is not an actual Modal, it's simply another view.
  3) Drag and Drop Functionality Not Yet Done
  4) Animation Does Not Yet Exist

*/

class Board extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      notes: [],
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  render() {
    // if (this.state.modal === false) {
    return (
      <div id="board">
        <h1 id="title"> Stick It to Me</h1>
        <div id="addNoteContainer" style={Styles.addNoteContainer}>
          <form onSubmit={this.addNote}>
            <input ref={(a) => this.note = a} placeholder="Do the Dishes"></input>
            <button id='addNoteButton'>Add Sticky</button>
          </form>
        </div>
        <div id="noteContainer">
          <Note notes={this.state.notes} deleteNote={this.deleteNote} editNote={this.editNote}
            toggleModal={this.toggleModal} openModal={this.openModal} />
        </div>
        {/*<div className="modal">
          <Modal isOpen={this.modal} closeModal={() => this.closeModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </Modal>
        </div>*/}
      </div>
    )
  }
}

export default Board;
