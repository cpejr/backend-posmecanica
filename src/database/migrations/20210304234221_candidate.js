exports.up = function (knex) {
  return knex.schema.createTable("candidate", function (table) {
    table.string("candidate_id").primary().notNullable();
    table.string("candidate_name").notNullable();
    table.date("candidate_birth").notNullable();
    table.string("candidate_gender").notNullable();
    table.string("candidate_race").notNullable();
    table.string("candidate_nationality").notNullable();
    table.string("candidate_cpf").notNullable();
    table.string("candidate_identity").notNullable();
    table.string("candidate_expedition").notNullable();
    table.string("candidate_civil_state").notNullable();
    table.string("candidate_voter_title").notNullable();
    table.integer("candidate_zone_title").notNullable();
    table.integer("candidate_section_title").notNullable();
    table.string("candidate_cep").notNullable();
    table.string("candidate_state").notNullable();
    table.string("candidate_city").notNullable();
    table.string("candidate_street").notNullable();
    table.string("candidate_district").notNullable();
    table.string("candidate_country").notNullable();
    table.integer("candidate_adress_num").notNullable();
    table.string("candidate_email").notNullable();
    table.string("candidate_phone_number").notNullable();
    table.string("candidate_university").notNullable();
    table.string("candidate_graduation").notNullable();
    table.enu('candidate_grade', ['MESTRADO', 'DOUTORADO']);
    table.date("candidate_grade_date_begin");
    table.date("candidate_grade_date_end");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("candidate");
};