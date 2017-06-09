require('dotenv').config();
var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();
var Q = require('../db/queries');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});


router.get('/posts', authCheck, function(req, res, next) {
  Q.getPosts()
  .then(response => {
    console.log(response);
    res.json(response);
  }).catch(err => {
    console.log(err);
    res.send(err);
  });
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
    console.log(err);
    res.send(err);
  });
});

module.exports = router;
