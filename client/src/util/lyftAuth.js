import {accessToken, authCode, state} from './queryParams'
const client_id = process.env.CONFIG_LYFT_CLIENT_ID || '_c1acZZEx7zF'
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || 'OudKwZhqGGCCTkc5IRTiDvwqUxkmef_0'
// const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null
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


export function retrieveAccessToken() {
  const url = 'https://api.lyft.com/oauth/token'

  console.log("auth:", authCode, "\nstate:", state)

  const myInit = {
    method: "POST",
    state: `${state}`,
    body: JSON.stringify({
      "grant_type": "authorization_code",
      "code": `${authCode}`
    }),
    headers: {
      "Authorization": "Basic "+window.btoa(`${client_id}:${client_secret}`),
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
  const url = 'https://api.lyft.com/v1/rides?start_time=2015-12-01T21:04:22Z&end_time=2018-12-04T21:04:22Z&limit=10'
  const accessToken = window.localStorage.getItem("accessToken")

  console.log('accessToken :: =>', accessToken);

  const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json;charset=UTF-8",
    }
    // headers: `Authorization: Bearer ${authCode}`
  }

  return fetch(url, myInit)
  .then(response => {
    return response.json()
  })
  .then(res => console.log(res))
  .catch(err => console.error('ERROR :: =>', err))
}


// export function getLyftToken() {
//   accessLyftAccount
//   retrieveAccessToken
//   useAccessToken
// }

// export default getLyftToken;
