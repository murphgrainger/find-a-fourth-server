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


router.get('/posts', function(req, res, next) {
  Q.getPosts()
  .then(response => {
    res.json(response);
  }).catch(err => {
    res.send(err);
  });
});

router.get('/posts/:id', function(req, res, next) {
  Q.getUserbyTokenId(req.params.id)
    .then(user => {
      Q.getPostsPerUser(user[0].id)
      .then(response => {
        res.json(response)
      }).catch(err => {
        res.send(err)
      })
    }).catch(err => {
      res.send(err)
    })
});

router.get('/users', authCheck, function(req, res, next) {
  Q.getUsers()
  .then(response => {
    res.json(response);
  }).catch(err => {
    res.send(err);
  });
});

router.post('/users', authCheck, function(req, res, next) {
  Q.getUser(req.body)
  .then(user => {
    if (user.length !== 0) {
      res.json(user)
    } else {
      Q.addUser(req.body)
      .then(response => {
        res.json('Successful Post');
      }).catch(err => {
        res.send(err);
      });
    }
  })
});


router.post('/posts', authCheck, function(req, res, next) {
  console.log(req.body);
  Q.addPost(req.body)
  .then(response => {
    res.json('Successful Post');
  }).catch(err => {
    res.send(err);
  });
});

module.exports = router;
