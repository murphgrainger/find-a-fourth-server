exports.up = function(knex, Promise) {
  return knex.schema.createTable('golfer', function(table) {
    table.increments();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.integer('handicap')
    table.integer('age')
    table.text('gender')
    table.integer('post_id').references('post.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('golfer');
};
