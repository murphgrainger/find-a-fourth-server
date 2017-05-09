exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table) {
    table.increments();
    table.timestamp('time');
    table.text('course_name');
    table.text('course_address');
    table.integer('cost');
    table.integer('group_count');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post');
};
