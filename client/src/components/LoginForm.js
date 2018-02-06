import React, { Component } from 'react'
import '../App.css'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailValue: '',
      passwordValue: ''
    }
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({passwordValue: event.target.value})
  }

  handleFormSubmit(event) {
    event.preventDefault()
  }

  render() {

    return (
      <div >
        <form onSubmit={this.handleFormSubmit} >
          <label>
            Email:
            <input type="email" value={this.state.emailValue} onChange={this.handleEmailChange.bind(this)} />
          </label>
          <br></br>
          <label>
            Password:
            <input type="password" value={this.state.passwordValue} onChange={this.handlePasswordChange.bind(this)} />
          </label>
          <br></br>
          <button className="button uk-button uk-button-secondary" type="submit">Log in</button>
        </form>
      </div>
    )
  }
}
