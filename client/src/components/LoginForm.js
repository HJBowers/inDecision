import React, { Component } from 'react'
import { accessLyftAccount, getLyftToken } from '../util/lyftAuth'
import '../App.css'

const client_id = process.env.CONFIG_LYFT_CLIENT_ID || '_c1acZZEx7zF'
const stateString = "true"


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

  // handleFormSubmit(event) {
  //   event.preventDefault()
  //   accessLyftAccount()
  // }

  // <form onSubmit={this.handleFormSubmit.bind(this)} >
  //   <button className="button uk-button uk-button-secondary" type="submit">Log in through your Lyft account!</button>
  // </form>

  render() {
    // const url = `https://api.lyft.com/oauth/authorize?${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`

    // return (
    //   <div >
    //     <a className="button uk-button uk-button-secondary" href={url}>OMG Log in!</a>
    //   </div>
    // )

    return (
      <div >
        <a className="button uk-button uk-button-secondary" href="http://localhost:3001/auth/lyft">Log in!</a>
     </div>
    )
  }
}
