var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/matzas');
});

 // Google OAuth login route
 router.get(
  '/auth/google', 
  passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/matzas',
    failureRedirect : '/matzas'
  }
));

 // OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/matzas');
});

module.exports = router;
