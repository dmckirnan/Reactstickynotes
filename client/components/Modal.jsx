import React from 'react';
import Styles from '../styles.scss';

const Modal = props => {
  return (
    <div id="modal">
      <div className="backdrop">
        <button onClick={() => console.log('hi')}>Click Me</button>
        <button onClick={props.toggleModal}>Exit Mode</button>
      </div>
    </div>
  )
}

export default Modal;