exports.up = function (knex) {
  return knex.schema.createTable('candidate_dis', (table) => {
    table.increments('candidate_dis_id').primary().notNullable();
    table.uuid('cd_candidate_id').notNullable();
    table.uuid('cd_dis_id').notNullable();
    table.boolean('cd_dis_deferment');

    table
      .foreign('cd_candidate_id')
      .references('candidate_id')
      .inTable('candidate')
      .onDelete('cascade');
    table
      .foreign('cd_dis_id')
      .references('discipline_id')
      .inTable('discipline')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('candidate_dis');
};
