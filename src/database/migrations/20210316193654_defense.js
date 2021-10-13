exports.up = function (knex) {
  return knex.schema.createTable('defense', (table) => {
    table.uuid('defense_id').primary().notNullable();
    table.uuid('defense_stud_id');
    table.string('defense_stud_name').notNullable();
    table.enu('defense_type', ['DISSERTACAO', 'TESE']);
    table.string('defense_title').notNullable();
    table.integer('defense_number').notNullable();
    table.string('defense_place').notNullable();
    table.string('defense_hour').notNullable();
    table.datetime('defense_date').notNullable();
    table.boolean('defense_approved').defaultTo(false).notNullable();

    table
      .foreign('defense_stud_id')
      .references('stud_id')
      .inTable('student')
      .onDelete('set null');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('defense');
};