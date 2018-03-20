import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  }

  changeDeadline() {
    // used to pass a new object with key value pair to change object

    this.setState({deadline: this.state.newDeadline});
  }


  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <div>
          <input
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
