exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.text('name').notNullable();
    table.text('token_id').notNullable();
    table.integer('handicap');
    table.integer('age');
    table.text('gender');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
