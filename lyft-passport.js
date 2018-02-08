const passport = require('passport')
require('dotenv').config()
const lyftStrategy = require('passport-lyft').Strategy
const client_id = process.env.CONFIG_LYFT_CLIENT_ID || null
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || null
const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null

passport.use(new lyftStrategy(
  {
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: 'http://localhost:3001/callback',
    state: true,
    // session: false
  },

  function(accessToken, refreshToken, profile, done) {
    var user = profile
    user.accessToken = accessToken
    console.log("lyftStrategy user.id:: ", user.id);

    return done(null, user)
  }
))

passport.serializeUser(function(user, done) {
  console.log("serializeUser user.id:: ", user.id);
  console.log("serializeUser user:: ", user);

  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  console.log("deserializeUser user.id:: ", id);
  User.findById(id, function(err, user) {
    done(err, user)
  })
})

module.exports = passport
