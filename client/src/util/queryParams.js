  let authorization_string = window.location.search
  authorization_string = authorization_string.replace("?code=", '')
  const authStateArr = authorization_string.split("&state=")
  const authCode = authStateArr[0]
  const authState = authStateArr[1]

module.exports = { authCode, authState }
