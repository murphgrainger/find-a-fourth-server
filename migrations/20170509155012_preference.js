exports.up = function(knex, Promise) {
  return knex.schema.createTable('preference', function(table) {
    table.increments();
    table.text('handicap');
    table.integer('age');
    table.text('gender');
    table.integer('post_id').references('post.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('preference');
};
