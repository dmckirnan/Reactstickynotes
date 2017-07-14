import React from 'react';
import Styles from './styles/Modal.scss';

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
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOk = () => {
    props.onOk();
    props.hideModal();
  };

  const okButton = props.showOk
    ? (
      <button
        onClick={onOk}
        disabled={props.okDisabled}
      >
        {props.okText}
      </button>
    ) : null;

  return (
    <div onClick={handleBackgroundClick}>
      <header>
        <h1>{props.title}</h1>

        <button onClick={props.hideModal}>Close</button>
      </header>

      {props.children}

      {okButton}
    </div>
  );
};

export default Modal;