import React, { Component } from 'react';
import './03/TodaysPlan';
import TodaysPlan from './03/TodaysPlan';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';

// ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    return (
      <div className="App">
        <h1 className="title"> 리액트 시작하자 </h1>
        <TodaysPlan />
        <Counter />
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <button onClick={this.resetCount}>{this.state.count + 10} 으로 초기화 </button>
      </div>
    );
  }
}

export default App;
