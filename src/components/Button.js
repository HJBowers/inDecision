import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bgColor: '#222'
    }
  }

  handleClick() {
    if(this.state.bgColor === '#222') {
      this.setState({
        bgColor: '#FF95C7'
      })
      } else {
         this.setState({
        bgColor: '#222'
      })
    }
  }

  render() {
    return (
      <div>
        <a
          className="button uk-button uk-button-secondary"
          onClick={this.handleClick.bind(this)}
          style={{backgroundColor:this.state.bgColor}}
        >{this.props.label}</a>
      </div>
    )
  }
}
