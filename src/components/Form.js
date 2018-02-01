import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

export default class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedOption: '',
      rating: 3,
      price: 2
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

  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  }

  onMoneyClick(nextValue, prevValue, name) {
      this.setState({price: nextValue});
  }


  onButtonClick() {
    var count = 1;
    function setColor(btn, color) {
      var property = document.getElementById(btn);
      if (count == 0) {
        property.style.backgroundColor = "#FFFFFF"
        count = 1;
      }
      else {
        property.style.backgroundColor = "#7FFF00"
        count = 0;
      }
    }
  }

  render() {
    console.log("Option selected: ", this.state.selectedOption);
    console.log("Rating selected: ", this.state.rating);
    console.log("Price selected: ", this.state.price);
    const { rating, price } = this.state;
    return (
      <div >
        <form onSubmit={this.handleFormSubmit} >

            <div className="location uk-button-group">
              <label className="uk-padding-small">
                <input type="radio" value="food"
                  checked={this.state.selectedOption === 'food'}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                <a className="button uk-button uk-button-secondary" >Food</a>
              </label>

              <label className="uk-padding-small">
                <input type="radio" value="drinks"
                  checked={this.state.selectedOption === 'drinks'}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                <a className="button uk-button uk-button-secondary" >Drink</a>
              </label>

              <label className="uk-padding-small">
                <input type="radio" value="food-drink"
                  checked={this.state.selectedOption === 'food-drink'}
                  onChange={this.handleOptionChange.bind(this)}
                  hidden
                />
                <a className="button uk-button uk-button-secondary" >Food & Drink</a>
              </label>
            </div>


          <div className="distance uk-card-small uk-card uk-card-body uk-card-primary">

              <label>
                <input type="radio" value="1mi"
                  checked={this.state.selectedOption === '1mi'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                1mi
              </label>

              <label>
                <input type="radio" value="3mi"
                  checked={this.state.selectedOption === '3mi'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                3mi
              </label>

              <label>
                <input type="radio" value="5mi"
                  checked={this.state.selectedOption === '5mi'}
                  onChange={this.handleOptionChange.bind(this)}
                />
                5mi
              </label>
          </div>

          <div className="rating uk-card-small uk-card uk-card-body uk-card-primary">

              <label>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </label>
          </div>

          <div className="price uk-card-small uk-card uk-card-body uk-card-primary">

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
