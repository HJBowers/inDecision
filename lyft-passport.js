const passport = require('passport')
require('dotenv').config()
const lyftStrategy = require('passport-lyft').Strategy
const client_id = process.env.CONFIG_LYFT_CLIENT_ID || null
const client_secret = process.env.CONFIG_LYFT_CLIENT_SECRET || null
const client_token = process.env.CONFIG_LYFT_CLIENT_TOKEN || null
var storage = require('node-persist')

storage.initSync();

passport.use(new lyftStrategy(
  {
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: 'http://localhost:3001/callback',
    state: 42,
    // session: false
  },

  function(accessToken, refreshToken, profile, done) {
    var user = profile
    user.accessToken = accessToken

    return done(null, user)
  }
))

passport.serializeUser(function(user, done) {
  console.log("****************** serializeUser user ******************\n", user, "\n**************************************************")

  // window.sessionStorage.setItem('user', user)

  done(null, user.id)
})

passport.deserializeUser(function(id, done) {

    done(null, id);
});

// passport.deserializeUser(function(id, done) {
//   const user = window.sessionStorage.getItem('user')
//   // console.log("\n\npassport user\n", req.session.passport.user)
//   console.log("\n\nuser\n", user)
//   console.log("\n\id\n", id)
//
//   done(null, user)
// })

module.exports = passport
