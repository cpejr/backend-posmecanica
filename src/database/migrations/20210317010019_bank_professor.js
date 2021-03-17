exports.up = function (knex) {
  return knex.schema.createTable('bank_professor', (table) => {
    table.increments('bank_professor_id').primary().notNullable();
    table.uuid('bp_professor_id').notNullable();
    table.uuid('bp_bank_id').notNullable();

    table
      .foreign('bp_professor_id')
      .references('prof_id')
      .inTable('professor')
      .onDelete('CASCADE');
    table
      .foreign('bp_bank_id')
      .references('bank_id')
      .inTable('bank')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bank_professor');
};
