const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('./lyft-passport')
const session = require('express-session')
const path = require('path')
const cors = require('cors')
const https = require('https')
const http = require('http')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())
app.use(session(
  {
    secret: 'nom nom nom',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }
  }
))
app.use(passport.initialize())
app.use(passport.session())

// function accessLyftAccount() {
//   const url = `https://api.lyft.com/oauth/authorize?client_id=${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`
//   const myInit = {
//     method: 'GET',
//     mode: 'cors',
//     headers: {"Access-Control-Allow-Origin": "*"},
//     redirect: 'follow'
//   }
//
//   return fetch(url, myInit)
//   .then( response => console.log(response) )
//   .catch(err => console.error(err))
// }

//
//

app.get('/yelpSearch', (req, res) => {
  const yelp_api_key = process.env.CONFIG_YELP_API_KEY
  const params = req.params
  console.log("params", params)

  const url = `https://api.yelp.com/v3/businesses/search?location=94611&limit=2`
  const myInit = {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${yelp_api_key}`,
    }
  }

  return fetch(url, myInit)
  .then(resp => {
    console.log(resp)
    return resp.json()
  })
  .then(response => {
    console.log(response)
    res.send(response)
  })
  .catch(err => console.error(err))
})



// app.get('/accessLyftAccount', function(req, res) {
//   const client_id = process.env.CONFIG_LYFT_CLIENT_ID
//   const stateString = "true"
//   const url = `https://api.lyft.com/oauth/authorize?client_id=${client_id}&scope=public%20profile%20rides.read%20rides.request%20offline&state=${stateString}&response_type=code`
//
// // 'https://api.lyft.com/oauth/authorize?client_id=_c1acZZEx7zF&scope=public%20profile%20rides.read%20rides.request%20offline&state=true&response_type=code'
// // https://www.lyft.com/oauth/authorize?response_type=code&redirect_uri=http:%2F%2Flocalhost:3001%2Fcallback&scope=public%20profile%20rides.read%20rides.request&state=OFO0zzqy2w32Ok4NBqs35siq&client_id=_c1acZZEx7zF
//
//   https.get(url, (res) => {
//     console.log('statusCode:\n', res.statusCode);
//     console.log('headers:\n', res.headers);
//
//     res.on('data', (d) => {
//       process.stdout.write(d);
//     });
//
//   })
//   .on('error', (e) => {
//     console.error(e);
//   })
// })

// Lyft-node-oauth
app.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public', 'profile', 'rides.read', 'rides.request'] }
))

app.get('/callback', passport.authenticate('lyft', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
})

const port = process.env.PORT || 3001
app.listen(port)

console.log(`inDecision listening on ${port}`)
