exports.up = function (knex) {
  return knex.schema.createTable('qualification', (table) => {
    table.uuid('quali_id').primary().notNullable();
    table.uuid('quali_stud_id');
    table.enu('quali_type', ['DISSERTACAO', 'TESE']);
    table.string('quali_title').notNullable();
    table.string('quali_place').notNullable();
    table.string('quali_hour').notNullable();
    table.datetime('quali_date').notNullable();
    table.boolean('quali_approved').defaultTo(false).notNullable();

    table
      .foreign('quali_stud_id')
      .references('stud_id')
      .inTable('student')
      .onDelete('set null');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('qualification');
};
