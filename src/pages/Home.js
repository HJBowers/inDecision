import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What would you like to do?</h1>
        </header>
        <p className="App-intro">
          Eat
        </p>
        <p className="App-intro">
          Drink
        </p>
        <form action="/decide">
          <input type="submit" value="Call a Lyft!" />
        </form>
      </div>
    );
  }
}

export default Home;
