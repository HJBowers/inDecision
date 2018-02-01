import React, { Component } from 'react';
import Button from '../components/Button'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      food: false,
      drinks: false,
      rating: 3,
      price: 2,
      distance: ''
    }
  }

  handleOptionChange(event) {
    // this.setState({
    //   selectedOption: changeEvent.target.value
    // });
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    // console.log('You have selected: ', this.state.selectedOption);
  }

  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  }

  onMoneyClick(nextValue, prevValue, name) {
      this.setState({price: nextValue});
  }

  render() {
    console.log("Food Checked: ", this.state.food)
    console.log("Drinks Checked: ", this.state.drinks)
    const { selectedOption, rating, price } = this.state;

    return (
      <div >
        <form onSubmit={this.handleFormSubmit} >
            <div className="uk-padding-small uk-button-group">
              <label className="uk-padding-remove-vertical uk-margin-left uk-margin-right">
                <input
                  type="checkbox"
                  name="food"
                  checked={this.state.food}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                <Button label="Food"/>
              </label>
              <label className="uk-padding-remove-vertical uk-margin-left uk-margin-right">
                <input
                  type="checkbox"
                  name="drinks"
                  checked={this.state.drinks}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                <Button label="Drinks"/>
              </label>
            </div>


          <div className="distance uk-flex uk-flex-center">

              <label className="uk-card uk-card-default uk-card-body">
                <input type="radio" value="1mi"
                  checked={this.state.selectedOption === '1mi'}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                1mi
              </label>

              <label className="uk-card uk-card-default uk-card-body">
                <input type="radio" value="3mi"
                  checked={this.state.selectedOption === '3mi'}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                3mi
              </label>

              <label className="uk-card uk-card-default uk-card-body">
                <input type="radio" value="5mi"
                  checked={this.state.selectedOption === '5mi'}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                5mi
              </label>
          </div>

          <div className="rating ">

              <label>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </label>
          </div>

          <div className="price ">

              <label>
                <StarRatingComponent
                    name="rate2"
                    starCount={4}
                    value={price}
                    renderStarIcon={() => <span>$</span>}
                    onStarClick={this.onMoneyClick.bind(this)}
                />
              </label>
          </div>

          <button className="btn btn-default" type="submit">Save</button>
        </form>
      </div>
    )
  }
}
