import React from 'react';
import Note from './Note.jsx';
import ReactBootstrap from 'react-bootstrap';

const Modal = ReactBootstrap.Modal;

const NoteModal = props => {
  const { text } = this.props;
  return (
    <Modal
      onRequestClose={this.props.onRequestClose}
      openTimeoutMS={150}
      closeTimeoutMS={150}
      style={customStyle}>
      <h1>What you input : {text}</h1>
      <button onClick={ModalManager.close}>Close Modal</button>
    </Modal>
  )
}

export default NoteModal;
