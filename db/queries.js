const knex = require('./knex');

module.exports = {

    getPosts: function() {
        return knex('post')
        .innerJoin('preference', 'post.id', 'preference.post_id')
    },

    addPost: function(post) {
      return knex('post')
        .insert({
          group_count: post.sizeGroup,
        })
    }
};
