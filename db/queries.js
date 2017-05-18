const knex = require('./knex');
let moment = require('moment');

module.exports = {

    getPosts: function() {
        return knex('post');
    },

    addPost: function(post) {
      let str = post.date;
      let date = moment(str);
      let formattedDate = date.utc().format('MM-DD-YYYY');
      return knex('post')
        .insert({
          date: formattedDate,
          handicap_min: post.handicapRange[0],
          handicap_max: post.handicapRange[1],
          age_min: post.ageRange[0],
          age_max: post.ageRange[1],
          gender: post.gender,
          group_count: post.sizeGroup,
        });
    }
};
