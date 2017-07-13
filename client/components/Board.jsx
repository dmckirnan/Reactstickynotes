import React, { Component } from 'react';
import Draggable from 'react-draggable';

import Modal from './Modal.jsx';
import Note from './Note.jsx';
import Styles from '../styles/styles.scss';
import NoteStyles from '../styles/Note.scss';


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
      i: 0,
      view: 'dash',
      modal: false,
      notes: [],
    }

    // Binds
    this.toggleModal = this.toggleModal.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.toggleMove = this.toggleMove.bind(this);
    this.animate = this.animate.bind(this);


    this.editNote = this.editNote.bind(this);
    this.textHandler = this.textHandler.bind(this);
  }

  componentDidMount() {
    
  }

  addNote(event) {
    let notes = this.state.notes;
    let i = this.state.i;
    i += 1;
    let title = 'Note #' + i;
    let text = 'Write Something!'
    notes.push(<li key={i} className='note'><Note id={i} 
    title={title} text={text} deleteNote={this.deleteNote} toggleModal={this.toggleModal} textHandler={this.textHandler} notes={this.state.notes} /></li>);

    this.setState({ notes: notes, i: i });
  }

  deleteNote(e) {
    e = e.toString();
    let notes = this.state.notes;
    notes = notes.filter(x => {
      return x.key !== e;
    });

    this.setState({ notes: notes });
  }

  toggleModal() {
    if (this.state.modalVisible === false) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    }
  }

  editTitle(e, index) {

    e.preventDefault();
    let notes = this.state.notes;

  }

  editNote(e) {
    e.preventDefault();

    let newNotes = this.state.notes;
    newNotes[index] = e.target.value;
    this.setState({ notes: newNotes });
  }

  textHandler(e, id) {
    // Handle Specific Note Text Updates
    e.preventDefault();
    let newText = e.target.value;
    let target = notes.filter((x) => x.id === id);

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


  toggleMove() {
    $
  }


  animate() {
    // Animation Trigger
  }


  render() {
    // if (this.state.modal === false) {
    return (
      <div id="board">
        <h1 id="title"> Stick It to Me</h1>
        <div id="addNoteContainer" style={Styles.addNoteContainer}>
          <div>
            <button id='addNoteButton' onClick={this.addNote}>Add A Note</button>
          </div>
        </div>
        <ul id="listContainer">
          {this.state.notes}
        </ul>
      </div>
    )
    // } else {
    //   return (
    //     <div>
    //       <button onClick={() => this.toggleModal()}>Open modal</button>
    //       <Modal modal={this.state.modal} toggleModal={() => this.toggleModal()}>
    //         <h1>Modal title</h1>
    //         <p>hello</p>
    //         <p><button onClick={() => this.toggleModal()}>Close</button></p>
    //       </Modal>
    //     </div>
    //   )
    // }
  }
}

export default Board;
