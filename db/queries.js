const knex = require('./knex');

module.exports = {

    getPosts: function() {
        return knex('post')
        .innerJoin('preference', 'post.id', 'preference.post_id')
    },

    addPost: function(post) {
      console.log(post);
      return knex('post')
        .insert({
          date: post.date,
          handicap_min: post.handicapRange[0],
          handicap_max: post.handicapRange[1],
          age_min: post.ageRange[0],
          age_max: post.ageRange[1],
          gender: post.gender,
          group_count: post.sizeGroup,
        });
    }
};
