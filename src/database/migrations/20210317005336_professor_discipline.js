exports.up = function (knex) {
  return knex.schema.createTable('professor_discipline', (table) => {
    table.increments('professor_dis_id').primary().notNullable();
    table.uuid('pd_professor_id').notNullable();
    table.uuid('pd_dis_id').notNullable();

    table
      .foreign('pd_professor_id')
      .references('prof_id')
      .inTable('professor')
      .onDelete('CASCADE');
    table
      .foreign('pd_dis_id')
      .references('discipline_id')
      .inTable('discipline')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('professor_discipline');
};
