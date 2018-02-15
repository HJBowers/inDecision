export function selectFromYelpResults(businesses) {
  const filteredBusinesses = businesses.filter(business => business.rating >= 3.5)
  const selectedBusiness = filteredBusinesses[Math.floor(Math.random()*filteredBusinesses.length)]
  const name = selectedBusiness.name
  const yelpRating = selectedBusiness.rating
  const price = selectedBusiness.price
  const categories = selectedBusiness.categories
  const location = selectedBusiness.location.display_address.join(", ")

    console.log("Randomly selected Business::: ", name, location)
    return {name, location}

}
