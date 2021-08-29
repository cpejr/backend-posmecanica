exports.up = function (knex) {
  return knex.schema.createTable('candidate', (table) => {
    table.uuid('candidate_id').primary().notNullable();
    table.string('candidate_name').notNullable();
    table.date('candidate_birth').notNullable();
    table.enu('candidate_gender', [
      'mulher cis',
      'mulher trans',
      'homem cis',
      'homem trans',
      'nao-binario',
      'agenero',
      'outro',
    ]);
    table.string('candidate_race').notNullable();
    table.string('candidate_nationality').notNullable();
    table.string('candidate_cpf').notNullable();
    table.string('candidate_identity').notNullable();
    table.string('candidate_expedition').notNullable();
    table.string('candidate_mother_name').notNullable();
    table.string('candidate_father_name').notNullable();
    table.string('candidate_civil_state').notNullable();
    table.string('candidate_voter_title').notNullable();
    table.integer('candidate_zone_title').notNullable();
    table.integer('candidate_section_title').notNullable();
    table.string('candidate_cep').notNullable();
    table.string('candidate_state').notNullable();
    table.string('candidate_city').notNullable();
    table.string('candidate_street').notNullable();
    table.string('candidate_district').notNullable();
    table.string('candidate_country').notNullable();
    table.integer('candidate_adress_num').notNullable();
    table.string('candidate_complement');
    table.string('candidate_email').notNullable();
    table.string('candidate_phone_number').notNullable();
    table.string('candidate_university').notNullable();
    table.string('candidate_graduation').notNullable();
    table.string('candidate_pGraduation_curse').notNullable();
    table.enu('candidate_grade', [
      'MESTRADO',
      'DOUTORADO',
      'NENHUMA DAS OPÇÕES',
    ]);
    table.date('candidate_grade_date_begin');
    table.date('candidate_grade_date_end');
    table.string('candidate_pGraduate_university');
    table.boolean('candidate_ufmg_active_serv');
    table.boolean('candidate_ufmg_retired_serv');
    table.date('candidate_date_inscrition').notNullable();
    table.uuid('candidate_process_id').notNullable();
    table.string('candidate_protocol').notNullable();
    table.boolean('candidate_form_approval');
    table.boolean('candidate_test_approval');
    table.boolean('candidate_curriculum_approval');
    table.integer('candidate_rating');
    table.boolean('candidate_deferment').defaultTo(false).notNullable();
    table.string('candidate_grade_obtained');
    table.text('candidate_justify');
    table.string('candidate_study_regimen');
    table.boolean('candidate_scholarship');
    table.string('candidate_concentration_area');
    table.boolean('candidate_PcD');

    table
      .foreign('candidate_process_id')
      .references('process_id')
      .inTable('selective_process')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('candidate');
};
