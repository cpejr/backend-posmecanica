exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('student')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
          stud_name: 'Gabriel',
          stud_id: 'e4752f84-5e77-4fc5-84b1-fbfcf7b92928',
          stud_password: '40028922',
          stud_email: 'gabrielmauad@cpejr.com.br',
          stud_registration: '999999999',
          stud_type: 'doutorado',
          stud_firebase: '1IXfb8vIdAbm47l51ivUnvY8Fqt2',
          stud_scholarship: true,
          stud_prof_advisor: 'Fernando',
          stud_prof_coAdvisor: 'Paulinho',
          stud_workplane: true,
          stud_workplane_date: '2025-01-01',
          stud_workplane_date: '2025-01-01',
          stud_process_id: 'e4752f84-5e77-4fc5-84b1-fbfcf7b92927',
        },
      ]);
    });
};
