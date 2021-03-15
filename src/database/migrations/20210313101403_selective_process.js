exports.up = function (knex) {
  return knex.schema.createTable('selective_process', function (table) {
    table.string('process_id').primary().notNullable();
    table.enu('process_type', ['MESTRADO', 'DOUTORADO', 'ISOLADA']);
    table.string('process_name').notNullable();
    table.date('process_date_begin').notNullable();
    table.date('process_date_end').notNullable();
    table.date('process_date_inscrition').notNullable();
    table.string('process_protocol').notNullable();
    table.boolean('process_form_approval').notNullable();
    table.boolean('process_test_approval').notNullable();
    table.boolean('process_curriculum_approval').notNullable();
    table.integer('process_rating').notNullable();
    table.string('process_candidate_id').nullable();                 
    table
      .foreign('process_candidate_id')
      .references('candidate_id')
      .inTable('candidate')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('selective_process');
};
