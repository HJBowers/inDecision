import React, { Component } from 'react';
import logo from '../Lyft.png';
import '../App.css';

class Decide extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Your Lyft is on the way!</h1>
        </header>
      </div>
    );
  }
}

export default Decide;
