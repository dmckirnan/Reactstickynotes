import React from 'react';


const StickyNote = props => {
  return (
    <div>
      <input type="text" value={props.stickyText} onChange={props.textHandler}></input>
      <div>{props.stickyText}</div>
    </div>
  )
}

export default StickyNote;