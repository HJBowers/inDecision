const client_id = process.env.CONFIG_LYFT_CLIENT_ID || '_c1acZZEx7zF'
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || 'OudKwZhqGGCCTkc5IRTiDvwqUxkmef_0'
// const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null
const stateString = "true"

export function accessLyftAccount() {
  let url = `https://api.lyft.com/oauth/authorize?${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`
  const myHeaders = new Headers({
    "Access-Control-Allow-Origin": "*"
  })

  const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: myHeaders,
    // credentials: 'include',
    // redirect: 'follow'
  }

  return fetch(url, myInit)
  .then(response => {
    return response
  })
  .catch(err => console.error(err))
}




export function retrieveAccessToken() {
  const url = 'https://api.lyft.com/oauth/token'
  // const url = `https://api.lyft.com/oauth/token?client_id=${}&client_secret=CLIENT_SECRET&grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=CALLBACK_URL`
  let accessToken = window.location.search
  accessToken = accessToken.replace("?code=", '')
  const authStateArr = accessToken.split("&state=")
  const authCode = authStateArr[0]
  const state = authStateArr[1]

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
  .then(response => console.log(response))
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
