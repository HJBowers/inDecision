import React, { Component } from 'react';
import logo from '../logo.svg';
import Form from '../components/Form';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What would you like to do?</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default Home;