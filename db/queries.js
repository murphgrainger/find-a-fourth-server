const knex = require('./knex');

module.exports = {

    getPosts: function(body) {
        return knex('post')
    }
};
