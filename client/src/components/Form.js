import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import Slider from 'react-rangeslider'
import Button from '../components/Button'
// import {geoFindMe} from '../util/geolocation'
import '../App.css'

export default class Form extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      latitude: "",
      longitude: "",
      food: false,
      drinks: false,
      rating: 3,
      price: 2,
      distance: 0
    }
  }


  componentDidMount(){
    this.geoFindMe()
  }

  geoFindMe() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser. Use Chrome, silly")
    }

    const success = (position) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log( "Coordinates: ", latitude, longitude )

      this.setState({latitude, longitude})
      console.log( "Coordinates state: ", this.state.latitude, this.state.longitude )
    }

    const error = () => {
      console.log( "Error!" )
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }


  handleOptionChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  handleFormSubmit(event) {
    event.preventDefault()
  }

  handleSliderChange(value) {
    this.setState({distance: value})
  }

  onStarClick(value) {
    this.setState({rating: value})
  }

  onMoneyClick(value) {
    this.setState({price: value})
  }

  render() {
    const { rating, price, distance } = this.state
    console.log(this.state)

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
          <div className="uk-container">
            <div className="uk-margin-large-bottom uk-margin-top slider">
              <Slider
                min={0}
                max={10}
                step={1}
                value={distance}
                orientation={"horizontal"}
                tooltip={true}
                labels={{1: '1 mile', 9: '10 miles'}}
                onChange={this.handleSliderChange.bind(this)}
              />
            </div>
            <div className=" uk-margin-large-top">
              <label>
                <StarRatingComponent
                  name="rate1"
                  starColor='#FF95C7'
                  emptyStarColor='#666'
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </label>
            </div>
            <div className="uk-margin-bottom uk-margin-top">
              <label>
                <StarRatingComponent
                  name="rate2"
                  starCount={4}
                  starColor= '#FF95C7'
                  emptyStarColor='#666'
                  value={price}
                  renderStarIcon={() => <span>$</span>}
                  onStarClick={this.onMoneyClick.bind(this)}
                />
              </label>
            </div>
          </div>
          <a className="button uk-button uk-button-secondary" href="http://localhost:3001/yelpSearch?location=' + '{this.state.location}' + '&term=' + '{this.state.food ? this.state.food : this.state.bar}' + '&limit=100" >Search Yelp!</a>
          <button className="uk-margin-large-bottom button uk-button uk-button-secondary" type="submit">Call a Lyft!</button>
        </form>
      </div>
    )
  }
}
