import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bgColor: 'grey'
    }
  }

  handleClick() {
    if(this.state.bgColor === 'grey') {
      this.setState({
        bgColor: 'pink'
      })
      } else {
         this.setState({
        bgColor: 'grey'
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
