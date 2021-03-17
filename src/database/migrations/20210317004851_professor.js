exports.up = function (knex) {
  return knex.schema.createTable('professor', (table) => {
    table.uuid('prof_id').primary().notNullable();
    table.string('prof_name').notNullable();
    table.string('prof_email').notNullable();
    table.enu('prof_gender', [
      'mulher cis',
      'mulher trans',
      'homem cis',
      'homem trans',
      'nao-binario',
      'agenero',
      'outro',
    ]);
    table.boolean('prof_active').defaultTo(false).notNullable();
    table.date('prof_birth').notNullable();
    table.string('prof_cpf').notNullable();
    table.boolean('prof_credential').defaultTo(false).notNullable();
    table.enu('prof_type', [
      'mestrado',
      'doutorado',
      'colaborador',
      'visitante',
    ]);
    table.enu('prof_title', ['Doutor', 'Mestre']);
    table.integer('prof_title_year').notNullable();
    table.string('prof_university').notNullable();
    table.string('prof_city').notNullable();
    table.string('prof_state').notNullable();
    table.string('prof_country').notNullable();
    table.string('prof_course').notNullable();
    table.string('prof_treatment').notNullable();
    table.string('prof_workplace').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('professor');
};
