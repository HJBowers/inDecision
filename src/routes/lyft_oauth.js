const express = require('express')
const passport = require('passport')


app.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public','profile'] }
));

app.get('/callback', passport.authenticate('lyft', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});
