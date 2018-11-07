const passport = require('passport')
const lyftStrategy = require('passport-lyft').Strategy
require('dotenv').config()
const client_id = process.env.CONFIG_LYFT_CLIENT_ID || null
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || null
const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null

passport.use(new lyftStrategy(
  {
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: 'http://localhost:3001/callback',
    state: 'true',
    // session: false
  },

  function(accessToken, refreshToken, profile, done) {
    var user = profile
    user.accessToken = accessToken

    return done(null, user)
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  done(null, id)
})

module.exports = passport
