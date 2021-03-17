exports.up = function (knex) {
  return knex.schema.createTable('administrator', (table) => {
    table.uuid('adm_id').primary().notNullable();
    table.string('adm_firebase').notNullable();
    table.string('adm_name').notNullable();
    table.string('adm_email').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('administrator');
};
