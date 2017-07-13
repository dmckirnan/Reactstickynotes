import React from 'react';
import Styles from '../styles/Modal.scss';

/*

  Current Role of Modal:

  1) To Provide UI to Edit / Zoom In on Note Content
  2) Provide Unique UX

  Current Issues:
  1) Doesn't Work
  2) Serves Essentially as New View instead of Modal View
  3) Needs Proper Styling to be a Modal

*/

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