const knex = require('./knex');

module.exports = {

    getPosts: function() {
        return knex('post')
        .innerJoin('preference', 'post.id', 'preference.post_id')
    }
};
