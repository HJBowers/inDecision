import React, { Component } from 'react'
import logo from '../logo.svg'
import Form from '../components/Form'
import { retrieveAccessToken } from '../util/lyftAuth'

import '../App.css'

class Home extends Component {

componentDidMount(){
  retrieveAccessToken()
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What would you like to do?</h1>
        </header>
        <div className="uk-container" >
          <Form />
        </div>
      </div>
    )
  }
}

export default Home
