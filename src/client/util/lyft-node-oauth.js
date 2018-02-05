const passport = require('passport')
const lyftStrategy = require('passport-lyft').Strategy
const client_id = process.env.CONFIG_LYFT_CLIENT_ID || null
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || null
const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null

passport.use(new lyftStrategy(
  {
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: 'http://localhost:3000/callback',
    state: true
  },

  function(accessToken, refreshToken, profile, done) {
    var user = profile

    user.accessToken = accessToken

    return done(null, user)
  }
))

module.exports = passport
