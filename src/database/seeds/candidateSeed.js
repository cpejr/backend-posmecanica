exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('candidate')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('candidate').insert([
        {
          candidate_id: '129e524f-47f0-4803-bac6-f9ba2780c5af',
          candidate_name: 'fernando',
          candidate_birth: '2000-03-04T03:00:00.000Z',
          candidate_gender: 'homem cis',
          candidate_race: 'Branco',
          candidate_nationality: 'Brasileiro',
          candidate_cpf: '123456',
          candidate_identity: 'SE-12.121.121',
          candidate_expedition: 'preguiçoso',
          candidate_civil_state: 'SolteirO e a fim',
          candidate_voter_title: '1234',
          candidate_zone_title: 123,
          candidate_section_title: 123,
          candidate_cep: '123456789',
          candidate_state: 'Sergipe',
          candidate_city: 'SE',
          candidate_street: 'bar',
          candidate_district: 'Aracaju',
          candidate_country: 'Brasil',
          candidate_adress_num: 123,
          candidate_email: 'fernandosilva@cpejr.com.br',
          candidate_phone_number: '999999999',
          candidate_university: 'UFMG',
          candidate_graduation: 'Engenharia de Controle e Automação',
          candidate_grade: null,
          candidate_grade_date_begin: null,
          candidate_grade_date_end: null,
          candidate_pGraduate_university: null,
          candidate_ufmg_active_serv: null,
          candidate_ufmg_retired_serv: null,
          candidate_date_inscrition: '2020-03-14T03:00:00.000Z',
          candidate_process_id: '5ca0963a-c2e7-451b-8490-0b0f8d8bab16',
          candidate_protocol: '780358609',
          candidate_form_approval: false,
          candidate_approval: null,
          candidate_curriculum_approval: null,
        },
      ])
    );
};
