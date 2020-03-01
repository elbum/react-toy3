import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state init
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  //   function 을 전달해야 이전값을 읽을 수 있다!!!!
  increaseCount() {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <span>카운트 : {this.state.count} </span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
