exports.up = function (knex) {
  return knex.schema.createTable('student_dis', (table) => {
    table.increments('student_dis_id').primary().notNullable();
    table.uuid('sd_student_id').notNullable();
    table.uuid('sd_dis_id').notNullable();

    table
      .foreign('sd_student_id')
      .references('stud_id')
      .inTable('student')
      .onDelete('cascade');
    table
      .foreign('sd_dis_id')
      .references('discipline_id')
      .inTable('discipline')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student_dis');
};
