import React from 'react';

const Counter = props => {
  return (
    <div>
      Likes : <span>{props.likesCount}</span>
      <div><button onClick={props.onLike}>Add Me Up</button></div>
    </div>
  )
}

export default Counter;