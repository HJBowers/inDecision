import React, { Component } from 'react';
import Form from './Form.js'
import logo from './Lyft.png';
import './App.css';

class Decide extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">inDecision</h1>
        </header>
        <Form></Form>
      </div>
    );
  }
}

export default Decide;
