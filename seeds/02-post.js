exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM post; ALTER SEQUENCE post_id_seq RESTART WITH 1;')
    .then(function() {
      const post = [{
        time: '2:22pm',
        date: '5/23/2017',
        course_name: 'Broken Tee',
        course_address: '2101 W Oxford Ave, Englewood, CO 80110',
        course_phone: '(303) 762-2670',
        cost: 23,
        group_count: 3,
        user_id: 1
      }, {
        time: '2:45pm',
        date: '5/22/2017',
        course_name: 'Highland Hills',
        course_address: '9650 Sheridan Blvd, Westminster, CO 80031',
        course_phone: '(303) 428-6526',
        cost: 35,
        group_count: 2,
        user_id: 2
      },
      {
        time: '5:44pm',
        date: '5/21/2017',
        course_name: 'Broken Tee',
        course_address: '2101 W Oxford Ave, Englewood, CO 80110',
        course_phone: '(303) 762-2670',
        cost: 23,
        group_count: 3,
        user_id: 3
      }];
      return knex('post').insert(post);
    });
};
