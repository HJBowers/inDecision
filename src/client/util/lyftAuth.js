const headers = new Headers()
const client_id = process.env.CONFIG_LYFT_CLIENT_ID || null
const stateString = "random"

function accessLyftAccount() {
  const url = `https://api.lyft.com/oauth/authorize?client_id=${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`

  const myInit = {
    method: 'GET',
    headers: headers,
    credentials: 'include'
    mode: 'cors',
    cache: 'default'
  }

  fetch(url, myInit)
  .then(response => response.json())
  .then( responseObj => {
    console.log(responseObj)
  })
  .catch(err => console.error(err))
}

function retrieveAccessToken() {

}

function useAccessToken() {

}


function getLyftToken() {
  accessLyftAccount
  retrieveAccessToken
  useAccessToken
}

export default getLyftToken;
