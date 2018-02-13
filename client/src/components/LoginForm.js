import React, { Component } from 'react'
import { yelpSearch } from '../util/yelpAuth'
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
    yelpSearch()
  }


  // <form onSubmit={this.handleFormSubmit.bind(this)} >
  //   <button className="button uk-button uk-button-secondary" type="submit">Log in through your Lyft account!</button>
  // </form>


  render() {
    const client_id = process.env.CONFIG_LYFT_CLIENT_ID || '_c1acZZEx7zF'
    const stateString = ""
    const url = `https://api.lyft.com/oauth/authorize?${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`

    return (
      <div>
        <form onSubmit={this.handleFormSubmit.bind(this)} >
          <button className="button uk-button uk-button-secondary" type="submit">Search Yelp!</button>
        </form>
        <a className="button uk-button uk-button-secondary" href="http://localhost:3001/accessLyftAccount">Login via /accessLyftAccount</a>
        <br/>
        <a className="button uk-button uk-button-secondary" href={url}>Login via direct URL</a>
        <br/>
        <a className="button uk-button uk-button-secondary" href="http://localhost:3001/auth/lyft">Login via passport-lyft</a>
      </div>
    )
  }
}
