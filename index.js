import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import passport from './src/client/util/lyft-node-oauth'
import session from 'express-session'
import path from 'path'

const app = express()

app.use(express.static(__dirname + '/build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session(
  {
    secret: 'nom nom nom',
    resave: false,
    saveUninitialized: false
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }
  }
))
app.use(passport.initialize())
app.use(passport.session())

// Lyft-node-oauth
app.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public','profile'] }
))

app.get('/callback', passport.authenticate('lyft', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Password generator listening on ${port}`)
