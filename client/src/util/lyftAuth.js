const client_id = process.env.CONFIG_LYFT_CLIENT_ID || '_c1acZZEx7zF'
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || 'OudKwZhqGGCCTkc5IRTiDvwqUxkmef_0'
// const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null
const stateString = "true"

export function accessLyftAccount() {
  const url = `https://api.lyft.com/oauth/authorize?client_id=${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`

  const myInit = {
    method: 'GET',
    credentials: 'include',
    mode: 'no-cors',
    cache: 'default',
    redirect: 'follow'
  }

  return fetch(url, myInit)
  .then(response => {console.log('accessLyftAccount resp::', response); return response})
  .then( responseObj => {
    console.log(responseObj)
    return responseObj
  })
  .catch(err => console.error(err))
}

export function retrieveAccessToken() {
  const url = 'https://api.lyft.com/oauth/token'
  let authCode = window.location.search
  authCode = authCode.replace("?code=", '')

  console.log("auth code from Lyft: ", authCode)

  const myInit = {
    method: "POST",
    // credentials: "same-origin",
    body: JSON.stringify({
      "grant_type": "authorization_code",
      "code": `${authCode}`
    }),
    headers: {
      "Authorization": "Basic "+window.btoa(`${client_id}:${client_secret}`),
       // "Authorization": "Basic "+base64(client_id+":"+client_secret),
      // "Authorization": "Basic "+window.btoa('_c1acZZEx7zF:OudKwZhqGGCCTkc5IRTiDvwqUxkmef_0'),
      // "Authorization": "Basic "+btoa+`(${client_id}:${client_secret})`,
      // "Authorization": "Basic "+base64(`${client_id}:${client_secret}`+`)`,
      // "Authorization": "Basic "+encodeBase64(client_id+":"+client_secret),
      // "Authorization": `Basic base64(${client_id}:${client_secret})`,
      "Content-Type": "application/json"
    }
  }

  return fetch(url, myInit)
  .then(response => {console.log('retrieveAccessToken response::', response); return response})
  .catch(err => console.error(err))
}


// function useAccessToken() {
//
// }


// export function getLyftToken() {
//   accessLyftAccount
//   retrieveAccessToken
//   useAccessToken
// }

// export default getLyftToken;
