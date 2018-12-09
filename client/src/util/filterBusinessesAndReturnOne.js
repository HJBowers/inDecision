export function filterBusinessesAndReturnOne(businesses) {
  const filteredBusinesses = businesses.filter(business => business.rating >= 3.5)
  const selectedBusiness = filteredBusinesses[Math.floor(Math.random()*filteredBusinesses.length)]
  const name = selectedBusiness.name
  const destinationLatitude = selectedBusiness.coordinates.latitude
  const destinationLongitude = selectedBusiness.coordinates.longitude
  // const yelpRating = selectedBusiness.rating
  // const price = selectedBusiness.price
  // const categories = selectedBusiness.categories
  const location = selectedBusiness.location.display_address.join(", ")

  // console.log("All filtered Businesses:::\n", filteredBusinesses.map( business => business.name) )
  // console.log("Randomly selected Business:::\n", name, ":\n", location)

  return {name, location, destinationLatitude, destinationLongitude}
}
