exports.up = function(knex, Promise) {
  return knex.schema.createTable('preference', function(table) {
    table.increments();
    table.text('handicap_range');
    table.text('age_range');
    table.text('gender');
    table.integer('post_id').references('post.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('preference');
};
