import React, { Component } from 'react';
import Modal from './Modal.jsx';
import Note from './Note.jsx';
import AddNote from './AddNote.jsx';
import Styles from '../styles.scss';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      view: 'dash',
      modalVisible: false,
      notes: [],
      noteCount: 1,
      noteText: 'This is a Sample',
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.toggleMove = this.toggleMove.bind(this);
    this.animate = this.animate.bind(this);


    this.editHandler = this.editHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.zoomHandler = this.zoomHandler.bind(this);
  }

  /*
    1 - Modal Method still non-functional & non-styled
    2 - Proper management and tracking of add and remove methods for notes (indexes, etc);
    3 - Actually add and remove notes
    4 - Still no idea how to make notes moveable
    5 - Styling
    6 - Animations?
    7 - Styling for main view and modal view

  */

  componentDidMount() {
    // Check for Re-Renders
  }

  toggleModal() {
    if (this.state.modalVisible === false) {
      this.setState({ modalVisible: true });
    } else {
      this.setState({ modalVisible: false });
    }
  }

  addNote(title, text) {
    let notes = this.state.notes;
    let newNote = {
      title: title,
      text: text
    }
    notes.push(newNote);
    this.setState({ notes: notes })
  }

  deleteNote(id) {
    let notes = this.state.notes;
    let index = notes.findIndex((x) => x.id === id);
    notes.splice(index, 1);
    this.setState({ notes: notes });
  }

  textHandler(e) {
    // Handle Specific Note Text Updates
    e.preventDefault();
    let newText = e.target.value;
    this.setState({ noteText: newText });
  }

  editHandler() {
    let newView = this.state.view;
    if (newView === 'dash') {
      newView = 'modal';
      this.setState({ view: newView });
    } else {
      newView = 'dash';
      this.setState({ view: newView });
    }
  }

  zoomHandler() {
    // Handle Zoom into Modal View
    if (this.state.view === 'dash') {
      let newView = 'modal';
    } else {
      let newView = 'dash';
    }
    this.setState({ view: newView });
  }


  toggleMove() {
    // Future Handler to Drag / Drop 
  }


  animate() {
    // Animation Trigger
  }


  render() {
    if (this.state.modalVisible === false) {
      return (
        <div id="board">
          <h1 id="title"> Stick It to Me</h1>
          <div id="addNoteContainer" style={Styles.addNoteContainer}>
            <AddNote addNote={this.addNote} />
          </div>
          <p>Here's a Sample Sticky Note!</p>
          <div className="note">
            <Note deleteNote={this.deleteNote} toggleModal={this.toggleModal} textHandler={this.textHandler} noteText={this.state.noteText} notes={this.state.notes} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.toggleModal()}>Open modal</button>
          <Modal modalVisible={this.state.modalVisible} toggleModal={() => this.toggleModal()}>
            <h1>Modal title</h1>
            <p>hello</p>
            <p><button onClick={() => this.toggleModal()}>Close</button></p>
          </Modal>
        </div>
      )
    }
  }
}

export default Board;
