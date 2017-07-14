import React from 'react';

const ModalBody = props => {
  let notes = props.notes;

  return (
    <div className="modal-body">
      <Note />
    </div>
  )
}

export default ModalBody;
