exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM post; ALTER SEQUENCE post_id_seq RESTART WITH 1;')
    .then(function() {
      const post = [{
        date: 'Mon, May 23rd',
        handicap_min: 10,
        handicap_max: 25,
        age_min: 20,
        age_max: 40,
        gender: 'male',
        group_count: 3,
        user_id: 1
      }, {
        date: 'Sun, May 22nd',
        handicap_min: 10,
        handicap_max: 25,
        age_min: 20,
        age_max: 40,
        gender: 'any',
        group_count: 2,
        user_id: 2
      },
      {
        date: 'Sat, May 21st',
        handicap_min: 10,
        handicap_max: 25,
        age_min: 20,
        age_max: 40,
        gender: 'female',
        group_count: 3,
        user_id: 3
      }];
      return knex('post').insert(post);
    });
};
