import React, { Component } from 'react';
import Counter from './Counter.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'login',
      likesCount: 0,
    }
    this.onLike = this.onLike.bind(this);
  }

  componentDidMount() {

  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikesCount });
  }

  loginSuccess() {
    this.setState({ view: 'dash' });
  }


  render() {
    return (
      <div>
        <p>Hello React!</p>
        <Counter likesCount = {this.state.likesCount} onLike = {this.onLike}/>
      </div>
    )
  }
}

export default App;