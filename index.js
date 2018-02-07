const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('./lyft-passport')
const session = require('express-session')
const path = require('path')
// const cors = require('cors')

const app = express()

//app.use(express.static(__dirname + '/client/build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())
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

// Lyft-node-oauth
app.get('/test', (req, res ) => {
  res.send('a test')
})

app.get('/auth/lyft', passport.authenticate('lyft', { scope: ['public','profile'] })
)

app.get('/callback', passport.authenticate('lyft', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   console.log('entered *');
//   res.sendFile(path.join(__dirname+'/client/build/index.html'))
// })

const port = process.env.PORT || 3001
app.listen(port)

console.log(`inDecision listening on ${port}`)
