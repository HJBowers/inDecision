import React, { Component } from 'react';
import logo from '../Lyft.png';
import LoginForm from '../components/LoginForm';
import '../App.css';

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Log in!</h1>
        </header>
        <div className="uk-container" >
          <LoginForm />
        </div>
      </div>
    );
  }
}
