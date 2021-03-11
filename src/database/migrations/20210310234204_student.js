exports.up = function (knex) {
  return knex.schema.createTable('student', function (table) {
    table.string('stud_id').primary().notNullable();
    table.string('stud_name').notNullable();
    table.string('stud_firebase').notNullable();
    table.string('stud_registration').notNullable();
    table.string('stud_password').notNullable();
    table.string('stud_email').notNullable();
    table.enu('stud_type', ['MESTRADO', 'DOUTORADO']).notNullable();
    table.boolean('stud_scholarship').notNullable();
    table.string('stud_prof_advisor').notNullable();
    table.string('stud_prof_coAdvisor').notNullable();
    table.boolean('stud_workplane').notNullable();
    table.date('stud_workplane_date').notNullable();
    table.string('stud_process_id').notNullable();

    table
      .foreign('stud_process_id')
      .references('candidate_id')
      .inTable('candidate')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student');
};
