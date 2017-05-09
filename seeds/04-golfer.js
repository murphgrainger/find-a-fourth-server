exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "golfer"; ALTER SEQUENCE golfer_id_seq RESTART WITH 1;')
    .then(function() {
      const golfer = [{
        first_name: 'Murph',
        last_name: 'Grainger',
        handicap: 11,
        age: 25,
        gender: 'Female',
        post_id: 1
      }, {
        first_name: 'Kim',
        last_name: 'Thompson',
        handicap: 18,
        age: 23,
        gender: 'Female',
        post_id: 2
      } , {
        first_name: 'George',
        last_name: 'Davis',
        handicap: 27,
        age: 45,
        gender: 'Male',
        post_id: 2
      } , {
        first_name: 'Jimmy',
        last_name: 'Smith',
        handicap: 2,
        age: 25,
        gender: 'Male',
        post_id: 3
      }];
      return knex('golfer').insert(golfer);
    });
};
