import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import Slider from 'react-rangeslider'
import Button from '../components/Button'
import axios from 'axios'
import {filterBusinessesAndReturnOne} from '../util/filterBusinessesAndReturnOne'
import {useAccessToken} from '../util/lyftAuth'
import '../App.css'

export default class Form extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      latitude: localStorage.getItem("originLat"),
      longitude: localStorage.getItem("originLng"),
      food: false,
      drinks: false,
      rating: 3,
      price: 2,
      distance: 1,
    }
  }


  handleOptionChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value})
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let destinationName, destinationLocation
    const url = "http://localhost:3001/yelpSearch"
    const { latitude, longitude, food, drinks, rating, price, distance } = this.state
    let term = food ? (drinks ? "restaurants,drinks": "restaurants") : (drinks ? "drinks" : "restaurants,drinks")
    localStorage.setItem("userRating", rating)

    axios.post(url, { latitude, longitude, term, price, distance })
    .then((yelpResults) => {
      if(yelpResults.data.businesses.length === 0) {
        alert( "Sorry, there are no destinations that meet your criteria.\nTry expanding your horizons by expanding your search radius. )" )
      } else {
        return filterBusinessesAndReturnOne(yelpResults.data.businesses)
      }
    })
    .then(destinationObj => {
      destinationName = destinationObj.name
      destinationLocation = destinationObj.location
      return useAccessToken(destinationObj.destinationLatitude, destinationObj.destinationLongitude)
    })
    .then(lyftRideRequestResponseObj => {
        console.log("Lyft Ride Request Object::::    \n", lyftRideRequestResponseObj)
        // console.log("destination::::    \n", destinationName, destinationLocation)
        console.log("Successful!")
        alert(`You're heading to ${destinationName}, located at ${destinationLocation}. \nYour Lyft is on it's way!`)
    })
    .then(() => {
      window.location.href="/decide";
    })
    .catch(err =>
        console.error("Error : ", err)
    )
  }

  handleSliderChange(value) {
    this.setState({distance: value})
  }


  // onStarClick(value) {
  //   this.setState({rating: value})
  // }

  // <div className=" uk-margin-large-top">
  //   <label>
  //     <StarRatingComponent
  //       name="rate1"
  //       starColor='#FF95C7'
  //       emptyStarColor='#666'
  //       starCount={5}
  //       value={rating}
  //       onStarClick={this.onStarClick.bind(this)}
  //     />
  //   </label>
  // </div>

  onMoneyClick(value) {
    this.setState({price: value})
  }

  render() {
    const { /* rating, latitude, longitude, */ price, distance, food, drinks } = this.state

    return (
      <div >
        <form onSubmit={this.handleFormSubmit.bind(this)} >
          <div className="uk-padding-small uk-button-group">
            <label className="uk-padding-remove-vertical uk-margin-left uk-margin-right">
              <input
                type="checkbox"
                name="food"
                checked={food}
                onChange={this.handleOptionChange.bind(this)}
                hidden
              />
              <Button label="Food"/>
            </label>
            <label className="uk-padding-remove-vertical uk-margin-left uk-margin-right">
              <input
                type="checkbox"
                name="drinks"
                checked={drinks}
                onChange={this.handleOptionChange.bind(this)}
                hidden
              />
              <Button label="Drinks"/>
            </label>
          </div>
          <div className="uk-container">
            <div className="uk-margin-top slider">
              <Slider
                min={1}
                max={10}
                step={1}
                value={distance}
                orientation={"horizontal"}
                tooltip={true}
                labels={{1: '1 mile', 10: '10 miles'}}
                onChange={this.handleSliderChange.bind(this)}
              />
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
          <button className="uk-margin-large-bottom button uk-button uk-button-secondary" type="submit"  >Call a Lyft!</button>
        </form>
      </div>
    )
  }
}
