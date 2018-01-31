import React, { Component } from 'react';
import logo from '../Lyft.png';
import '../App.css';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Log in!</h1>
        </header>
      </div>
    );
  }
}

export default Login;
