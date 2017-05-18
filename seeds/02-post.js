exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM post; ALTER SEQUENCE post_id_seq RESTART WITH 1;')
    .then(function() {
      const post = [{
        date: '5-23-2017',
        handicap_min: 10,
        handicap_max: 25,
        age_min: 20,
        age_max: 40,
        gender: 'male',
        group_count: 3,
        user_id: 1
      }, {
        date: '5-22-2017',
        handicap_min: 10,
        handicap_max: 25,
        age_min: 20,
        age_max: 40,
        gender: 'any',
        group_count: 2,
        user_id: 2
      },
      {
        date: '5-21-2017',
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
