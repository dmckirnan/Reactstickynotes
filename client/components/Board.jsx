import React, { Component } from 'react';
import Modal from './Modal.jsx';
import Note from './Note.jsx';
import Styles from '../styles/styles.scss';


/*
  Current Role of Board:

  1) Parent Component / Top Level Component / State Store
  2) Contains All Necessary Methods for Note Add, Remove, Text Edit, Modal Toggle, Animation
  3) Renders AddNoteButton, Note, and Modal

  Current Issues:

  1) Cannot Add New Notes
  2) Cannot Remove New Notes
  3) Lacks Styling
  4) Modal is not an actual Modal, it's simply another view.
  5) Animation Does Not Yet Exist

*/

class Board extends Component {
  constructor() {
    super();
    this.state = {
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


    this.editHandler = this.editHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.zoomHandler = this.zoomHandler.bind(this);
  }

  componentDidMount() {
    // Check for Re-Renders
  }

  toggleModal() {
    if (this.state.modalVisible === false) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    }
  }

  addNote(event) {
    let notes = this.state.notes;
    this.setState({ notes: notes.concat(<div className='note'><Note key={notes.length} deleteNote={this.deleteNote} toggleModal={this.toggleModal} textHandler={this.textHandler} notes={this.state.notes} /></div>) })
  }

  deleteNote(id) {
    let notes = this.state.notes;
    let index = notes.filter((x) => x.id === id);
    notes.splice(index, 1);
    this.setState({ notes: notes });
  }

  editNote(e, index) {
    e.preventDefault();

    let newNotes = this.state.notes;
    newNotes[index] = e.target.value;
    this.setState({ notes: newNotes });
  }

  textHandler(e, id) {
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
    // if (this.state.modal === false) {
    return (
      <div id="board">
        <h1 id="title"> Stick It to Me</h1>
        <div id="addNoteContainer" style={Styles.addNoteContainer}>
          <div>
            <button id='addNoteButton' onClick={this.addNote}>Add A Note</button>
          </div>
        </div>
        <p>Here's a Sample Sticky Note!</p>
        {this.state.notes}
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
