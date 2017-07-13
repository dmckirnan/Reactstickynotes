import React, { Component } from 'react';
import Note from './Note.jsx';
import AddNote from './AddNote.jsx';
import Styles from '../styles.scss';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      view: 'dash',
      notes: [],
      noteCount: 1,
      noteText: 'This is a Sample',
    }
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.zoomHandler = this.zoomHandler.bind(this);
    this.toggleMove = this.toggleMove.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    // Check for Re-Renders
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
    if (this.view === 'dash') {
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
    return (
      <div id="board">
        <h1 id="title"> Stick It to Me</h1>
        <div id="addNoteContainer" style={Styles.addNoteContainer}>
          <AddNote addNote={this.addNote} />
        </div>
        <p>Here's a Sample Sticky Note!</p>
        <div className="note">
          <Note deleteNote={this.deleteNote} editHandler={this.editHandler} textHandler={this.textHandler} noteText={this.state.noteText} notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Board;
