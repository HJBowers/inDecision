import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Decide from './pages/Decide'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/decide" component={Decide}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
