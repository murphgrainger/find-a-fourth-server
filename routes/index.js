require('dotenv').config();
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var Q = require('../db/queries');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


router.get('/posts', function(req, res, next) {
  Q.getPosts()
  .then(response => {
    console.log(response);
    res.json(response);
  }).catch(err => {
    res.send(err);
  });
});

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    // This is the identifier we set when we created the API
    audience: `${process.env.AUTH0_API_IDENTIFIER}`,
    issuer: process.env.AUTH0_DOMAIN,
    algorithms: ['RS256']
});

router.get('/users', authCheck, function(req, res, next) {
  Q.getUsers()
  .then(response => {
    console.log(response);
    res.json(response);
  }).catch(err => {
    res.send(err);
  });
});

router.post('/posts', function(req, res, next) {
  Q.addPost(req.body)
  .then(response => {
    res.json('Successful Post');
  }).catch(err => {
    res.send(err);
  });
});

module.exports = router;
