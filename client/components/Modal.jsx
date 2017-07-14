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

  if (this.props.isOpen) {
    return (
      <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
        <div className="modal">
          {this.props.children}
        </div>
      </ReactCSSTransitionGroup>
    );
  } else {
    return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
  }
}

  // if (props.modal === false) return null;

  // let modalStyle = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   zIndex: '9999',
  //   background: '#fff'
  // }

  // let backdropStyle = {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   top: '0px',
  //   left: '0px',
  //   zIndex: '9998',
  //   background: 'rgba(0, 0, 0, 0.3)'
  // }

  // return (
  //   <div>
  //     <div style={modalStyle}></div>
  //     <div style={backdropStyle} onClick={() => props.closeModal()} />}
  //     </div>
  // )

export default Modal;