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
    this.textHandler = this.textHandler.bind(this);
    this.toggleMove = this.toggleMove.bind(this);
    this.zoomHandler = this.zoomHandler.bind(this);
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
    let newView = 'modal';
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
