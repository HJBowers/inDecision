import {accessToken, authCode, state} from './queryParams'
import {client_id} from './config'
import {client_secret} from './config'

const stateString = "true"

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



// Remove sandbox when ready for production
export function retrieveAccessToken() {
  const url = 'https://api.lyft.com/oauth/token'

  const check_env = process.env.NODE_ENV === 'development'
    ? 'SANDBOX-'
    : ''

    // console.log('check_env :: ==>', check_env)

  const myInit = {
    method: "POST",
    state: `${state}`,
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
    setToken(response.access_token, () => useAccessToken())
  })
  .catch(err => console.error(err))
}


function setToken(token, callback) {
  window.localStorage.setItem("accessToken", token)
  callback()
}


export function useAccessToken() {
  // const url = 'https://api.lyft.com/v1/rides'
  // const accessToken = window.localStorage.getItem("accessToken")
  //
  // const myInit = {
  //   method: 'POST',
  //   mode: 'cors',
  //   cache: 'default',
  //   body: JSON.stringify({
  //     "grant_type": "client_credentials",
  //     "ride_type" : "lyft",
  //     // parse origin via user gps location
  //     "origin" : {"lat" : 37.77663, "lng" : -122.39227 },
  //     "destination" : {
  //       "lat" : 37.771,
  //       "lng" : -122.39123,
  //       "address" : "Mission Bay Boulevard North"
  //     }
  //   }),
  //   headers: {
  //     "Authorization": `Bearer ${accessToken}`,
  //     "Content-Type": "application/json;charset=UTF-8",
  //   }
  // }
  //
  // return fetch(url, myInit)
  // .then(response => response.json())
  // .then(res => console.log(res))
  // .catch(err => console.error('ERROR :: =>', err))
}


// export function getLyftToken() {
//   accessLyftAccount
//   retrieveAccessToken
//   useAccessToken
// }

// export default getLyftToken;
