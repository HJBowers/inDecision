import { authCode, authState} from './queryParams'
import { client_id } from './config'
import { client_secret } from './config'

// const stateString = "true"

// // Manually signing in to Lyft, This has been replaced with passport
// export function accessLyftAccount() {
//   const url = `https://api.lyft.com/oauth/authorize?client_id=${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`
//   const myInit = {
//     method: 'GET',
//     mode: 'cors',
//     headers: {"Access-Control-Allow-Origin": "*"},
//     // credentials: 'include',
//     // cache: 'default',
//     redirect: 'follow'
//   }
//
//   return fetch(url, myInit)
//   .then( response => console.log(response) )
//   .catch(err => console.error(err))
// }


export function retrieveAccessToken() {
  const check_env = process.env.NODE_ENV === 'development' ? 'SANDBOX-'  : ''
  const url = 'https://api.lyft.com/oauth/token'
  const myInit = {
    method: "POST",
    state: `${authState}`,
    body: JSON.stringify({
      "grant_type": "authorization_code",
      "code": `${authCode}`
    }),
    headers: {
      "Authorization": "Basic "+window.btoa(`${client_id}:${check_env}${client_secret}`),
      "Content-Type": "application/json;charset=UTF-8"
    }
  }

  return fetch(url, myInit)
  .then(response => response.json())
  .then(response => {
    // bypasses async so that accessToken is set before it's used
    // (so accessToken doesn't get used immediately --incase of page refresh)
    window.localStorage.setItem("accessToken", response.access_token)
    // setToken(response.access_token, () => useAccessToken())
  })
  .catch(err => console.error(err))
}

// function setToken(token, callback) {
//   window.localStorage.setItem("accessToken", token)
//   callback()
// }

export function useAccessToken(destinationLatitude, destinationLongitude) {
  const url = 'https://api.lyft.com/v1/rides'
  const accessToken = window.localStorage.getItem("accessToken")
  const originLat = localStorage.getItem("originLat")
  const originLng = localStorage.getItem("originLng")
  const destination = localStorage.getItem("destination")

  const myInit = {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      "grant_type": "client_credentials",
      "ride_type" : "lyft",
      "origin": {"lat": originLat, "lng": originLng },
      "destination" : {
        "lat" : destinationLatitude,
        "lng" : destinationLongitude,
        "address" : destination
      }
    }),
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json;charset=UTF-8",
    }
  }

  return fetch(url, myInit)
  .then(response => response.json())
  .then(rideRequested => rideRequested)
  .catch(err => console.error('ERROR :: =>', err))
}
