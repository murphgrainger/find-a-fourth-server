exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', function(table) {
    table.increments();
    table.integer('handicap').notNullable();
    table.integer('age').notNullable();
    table.text('gender');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profile');
};
