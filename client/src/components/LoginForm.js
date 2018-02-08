import React, { Component } from 'react'
import { accessLyftAccount } from '../util/lyftAuth'
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
    accessLyftAccount()
  }

  render() {

    return (
      <div >
        <form onSubmit={this.handleFormSubmit.bind(this)} >
          <button className="button uk-button uk-button-secondary" type="submit">Log in through your Lyft account!</button>
        </form>
        <a className="button uk-button uk-button-secondary" href="http://localhost:3001/auth/lyft">Log in!</a>
      </div>
    )
  }
}
