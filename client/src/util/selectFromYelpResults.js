export function selectFromYelpResults(businesses) {
  const business = businesses[Math.floor(Math.random()*businesses.length)]
  const name = business.name
  const yelpRating = business.rating
  const price = business.price
  const categories = business.categories
  const location = business.location.display_address.join(", ")

  console.log("Randomly selected Business::: ", name, yelpRating, price, location, categories)
}
