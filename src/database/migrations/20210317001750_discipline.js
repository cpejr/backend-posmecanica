exports.up = function (knex) {
  return knex.schema.createTable('discipline', (table) => {
    table.uuid('discipline_id').primary().notNullable();
    table.string('discipline_code').notNullable();
    table.text('discipline_content', 'longtext').notNullable();
    table.string('discipline_name').notNullable();
    table.boolean('discipline_is_isolated').defaultTo(false).notNullable();
    table.boolean('discipline_iso_approved').defaultTo(false);
    table
      .enu('discipline_semester', [
        'PRIMEIRO',
        'SEGUNDO',
        'PRIMEIRO_SEGUNDO, NAO_OFERTADO',
      ])
      .notNullable();
    table.enu('discipline_type', ['MESTRADO', 'DOUTORADO']).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('discipline');
};
