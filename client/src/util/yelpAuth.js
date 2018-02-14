// 'use strict'
// const yelp_api_key = process.env.CONFIG_YELP_API_KEY || "He7gC61zfCmMT8HE2KcITKwI11pcISSySjdkqaa2CMcdinSbX_saCkfHZTewcz8GAq0eOoCdxhUkyJX4yHetDB-YKBe-ylJTX8wgwOZXqBytpphq3S4Y3ONLxVeCWnYx"
// const yelp = require('yelp-fusion')

// const client = yelp.client(yelp_api_key)
//
// export function yelpSearch() {
//   client.search({
//     term:'food',
//     location: 'oakland, ca',
//     limit: 10
//   })
//   .then(response => {
//     console.log(response.jsonBody.businesses)
//   })
//   .catch(e => {
//     console.log(e)
//   })
// }


//
// export function yelpSearch() {
//   const params = "term=food&location=94611&limit=10"
//   const url = `https://api.yelp.com/v3/businesses/search?${params}`
//   const myInit = {
//     method: 'GET',
//     // mode: 'no-cors',
//     headers: {
//       "Authorization": `Bearer ${yelp_api_key}`,
//     }
//   }
//
//   return fetch(url, myInit)
//   .then(resp => {
//     console.log(resp);
//     resp.json()
//   })
//   .then(response => console.log(response))
//   .catch(err => console.error(err))
// }
