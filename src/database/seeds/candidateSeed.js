exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("candidate")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("candidate").insert([
        {
          candidate_id: "e5391e49-5cde-45fe-98c2-ff76168432da",
          candidate_name: "Gabriel",
          candidate_birth: "2001-11-10T02:00:00.000Z",
          candidate_gender: "Masculino",
          candidate_race: "Branco",
          candidate_nationality: "Brasileiro",
          candidate_cpf: "111.111.111-11",
          candidate_identity: "MG-11.111.111",
          candidate_expedition: "Policia",
          candidate_civil_state: "Solteiro",
          candidate_voter_title: "11112001",
          candidate_zone_title: 111,
          candidate_section_title: 110,
          candidate_cep: "1111111111",
          candidate_state: "Minas Gerais",
          candidate_city: "Belo Horizonte",
          candidate_street: "UFMG",
          candidate_district: "UFMG",
          candidate_country: "Brasil",
          candidate_adress_num: 111,
          candidate_email: "gabrielmauad@cpejr.com.br",
          candidate_phone_number: "999999999",
          candidate_university: "UFMG",
          candidate_graduation: "Engenharia de Controle e Automação",
          candidate_grade: null,
          candidate_grade_date_begin: null,
          candidate_grade_date_end: null,
        },
      ])
    );
};
