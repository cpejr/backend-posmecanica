exports.up = function (knex) {
  return knex.schema.createTable('search_area', function (table) {
    table.uuid('search_area_id').primary().notNullable();
    table.string('search_area_name').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('search_area');
};
