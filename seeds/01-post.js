exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM post; ALTER SEQUENCE post_id_seq RESTART WITH 1;')
    .then(function() {
      const post = [{
        date: '2017-08-18T21:06:22.000Z',
        address: 'Fox Hollow Golf Course, West Morrison Road, Lakewood, CO',
        group_count: 3,
        handicap_min: 11,
        handicap_max: 25,
        age_min: 25,
        age_max: 38,
        gender: 'male',
        user_id: 1
      }, {
        date: '2017-08-09T21:07:00.000Z',
        address: 'Arvada, CO',
        group_count: 2,
        handicap_min: 18,
        handicap_max: 29,
        age_min: 36,
        age_max: 66,
        gender: 'any',
        user_id: 1
      }];
      return knex('post').insert(post);
    });
};
