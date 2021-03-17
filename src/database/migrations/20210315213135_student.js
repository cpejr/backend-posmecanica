exports.up = function (knex) {
  return knex.schema.createTable('student', (table) => {
    table.uuid('stud_id').primary().notNullable();
    table.string('stud_firebase').notNullable();
    table.string('stud_default_password').notNullable();
    table.string('stud_registration');
    table.boolean('stud_scholarship').defaultTo(false).notNullable();
    table.string('stud_prof_advisor');
    table.string('stud_prof_coAdvisor');
    table.boolean('stud_workplane');
    table.date('stud_workplane_date');
    table.uuid('stud_process_id').notNullable();
    table.uuid('stud_candidate_id').notNullable();

    table
      .foreign('stud_candidate_id')
      .references('candidate_id')
      .inTable('candidate')
      .onDelete('cascade');
    table
      .foreign('stud_process_id')
      .references('process_id')
      .inTable('selective_process')
      .onDelete('set null');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student');
};
