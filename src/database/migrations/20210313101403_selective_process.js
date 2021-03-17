exports.up = function (knex) {
  return knex.schema.createTable('selective_process', (table) => {
    table.uuid('process_id').primary().notNullable();
    table.enu('process_type', ['MESTRADO', 'DOUTORADO', 'ISOLADA']);
    table.string('process_name').notNullable();
    table.datetime('process_date_begin').notNullable();
    table.datetime('process_date_end').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('selective_process');
};
