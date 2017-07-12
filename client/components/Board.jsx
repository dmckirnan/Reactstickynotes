import React, { Component } from 'react';
import StickyNote from './StickyNote.jsx';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      view: 'dash',
      stickyCount: 0,
      stickyText: 'This is a Sample',
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

  addNote() {
    // Create New Sticky Note Component
  }

  deleteNote() {
    // Remove Specific Sticky Note Component
  }

  textHandler(e) {
    // Handle Specific Note Text Updates
    e.preventDefault();
    let newText = e.target.value;
    this.setState({ stickyText: newText });
  }

  zoomHandler() {
    // Handle Zoom into Modal View
    if (this.view === 'dash') let newView = 'modal';
    else let newView = 'dash';
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
      <div>
        <p>Here's a Sample Sticky Note!</p>
        <StickyNote stickyText={this.state.stickyText} textHandler={this.textHandler} />
      </div>
    )
  }
}

export default Board;
