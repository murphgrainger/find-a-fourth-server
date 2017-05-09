exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table) {
    table.increments();
    table.text('time');
    table.text('date');
    table.text('course_name');
    table.text('course_address');
    table.text('course_phone');
    table.integer('cost');
    table.integer('group_count');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
