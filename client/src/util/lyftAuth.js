const client_id = process.env.CONFIG_LYFT_CLIENT_ID || '_c1acZZEx7zF'
const stateString = ""

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

function retrieveAccessToken() {

}

function useAccessToken() {

}


export function getLyftToken() {
  accessLyftAccount
  retrieveAccessToken
  useAccessToken
}

// export default getLyftToken;
