const knex = require('./knex');
const objection = require('objection');
const User = require('../models/user');
const Post = require('../models/post');
const Golfer = require('../models/golfer');

module.exports = {
    getPosts: function() {
      return Post
      .query()
      .skipUndefined();
  },

  // getPostsPerUser: function(id) {
  //   console.log(id);
  //   return Post
  //   .query()
  //   .then(post => {
  //     return post
  //     .$relatedQuery('user')
  //     .where('token_id', id)
  //   })
  // },

  getUserbyTokenId: function(id) {
    return User
    .query()
    .where('token_id', id)
  },

  getPostsPerUser: function(id) {
    return User
    .query()
    .findById(id)
    .then(user => {
      return user
      .$relatedQuery('posts')
    })
  },

  getUsers: function() {
      return User
      .query()
      .skipUndefined();
  },

  getUser: function(body) {
    return User
    .query()
    .where('token_id', '=', body.id)
  },

  addUser: function(body) {
    return User
      .query()
      .insert({
        name: body.name,
        token_id: body.id,
      })
  },

  addPost: function(post) {
    return User
    .query()
    .findById(post.currentUserId)
    .then(user => {
      return user
      .$relatedQuery('posts')
      .insert({
        date: post.date,
        handicap_min: post.handicapRange[0],
        handicap_max: post.handicapRange[1],
        age_min: post.ageRange[0],
        age_max: post.ageRange[1],
        gender: post.gender,
        group_count: post.sizeGroup,
        address: post.address
      });
    });
  }
};
