exports.up = function (knex) {
  return knex.schema.createTable('student', (table) => {
    table.uuid('stud_id').primary().notNullable();
    table.string('stud_firebase').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('stud_defaultPassword').notNullable();
    table.string('stud_registration');
    table.boolean('stud_scholarship').defaultTo(false).notNullable();
    table.string('stud_prof_advisor');
    table.string('stud_prof_coAdvisor');
    table.boolean('stud_workplane');
    table.date('stud_workplane_date');
    table.uuid('stud_candidate_id').notNullable();
    table.enu('stud_type', [
      'ATIVO',
      'DEFENDENDO DISSERTAÇÃO',
      'NENHUMA DAS OPÇÕES',
    ]);

    table
      .foreign('stud_candidate_id')
      .references('candidate_id')
      .inTable('candidate')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student');
};
