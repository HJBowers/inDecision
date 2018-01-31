import React, { Component } from 'react';
import '../App.css';

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedOption: ''
    }
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log('You have selected: ', this.state.selectedOption);
  }

  render() {
    console.log("Option selected: ", this.state.selectedOption);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="location">
            <div className="radio">
              <label>
                <input type="radio" value="food"
                  checked={this.state.selectedOption === 'food'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                Food
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="bar"
                  checked={this.state.selectedOption === 'bar'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                Drinks
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="food-drink"
                  checked={this.state.selectedOption === 'food-drink'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                Food & Drinks
              </label>
            </div>
          </div>
          <div className="distance">
            <div className="radio">
              <label>
                <input type="radio" value="1mi"
                  checked={this.state.selectedOption === '1mi'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                1mi
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="3mi"
                  checked={this.state.selectedOption === '3mi'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                3mi
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="5mi"
                  checked={this.state.selectedOption === '5mi'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                5mi
              </label>
            </div>
          </div>
          <div className="Rating">
            <div className="radio">
              <label>
                <input type="radio" value="***"
                  checked={this.state.selectedOption === '***'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                ***
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="****"
                  checked={this.state.selectedOption === '****'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                ****
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="*****"
                  checked={this.state.selectedOption === '*****'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                *****
              </label>
            </div>
          </div>
          <div className="price">
            <div className="radio">
              <label>
                <input type="radio" value="$"
                  checked={this.state.selectedOption === '$'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                $
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="$$"
                  checked={this.state.selectedOption === '$$'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                $$
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="$$$"
                  checked={this.state.selectedOption === '$$$'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                $$$
              </label>
            </div>
          </div>
          <button className="btn btn-default" type="submit">Save</button>
        </form>
      </div>
    )
  }
}
