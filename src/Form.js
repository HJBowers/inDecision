import React, { Component } from 'react';
import './App.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
            Eat:
            <input type="radio" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Drink:
            <input type="radio" value={this.state.value} onChange={this.handleChange} />
          </label>
        <input type="submit" value="Submit" />

      </form>
    );
  }
}

{/* <label>
  Name:
  <input type="radio" value={this.state.value} onChange={this.handleChange} >
    <img src="http://placehold.it/60x60/009900/fff&text=$"></img>
  </input>
</label> */}
