exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "preference"; ALTER SEQUENCE preference_id_seq RESTART WITH 1;')
    .then(function() {
      const preference = [{
        handicap_range: '10-25',
        age_range: '24-33',
        gender: 'Female',
        post_id: 1
      }, {
        handicap_range: '18-28',
        age_range: '20-28',
        gender: 'Either',
        post_id: 2
      } , {
        handicap_range: '0-10',
        age_range: '35-55',
        gender: 'Male',
        post_id: 3
      }];
      return knex('preference').insert(preference);
    });
};
