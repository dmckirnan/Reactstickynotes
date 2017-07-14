import React from 'react';
import Note from './Note.jsx';

const Modal = props => {
  return (
    <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title="Modal Title" />
          <ModalBody />
        </div>
      </div>
    </div>
  )
}

export default Modal;
