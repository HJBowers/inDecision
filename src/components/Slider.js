import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import '../App.css';


export default class DistanceSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      distance: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      distance: value
    })
  }

  render() {
    let { distance } = this.state
    return (
      <Slider
        min={0}
        max={10}
        step={1}
        value={distance}
        orientation={"horizontal"}
        tooltip={true}
        labels={{1: '1 mile', 9: '10 miles'}}
        onChange={this.handleOnChange}
      />
    )
  }
}
