exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('administrator')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('administrator').insert([
        {
          process_id: '5ca0963a-c2e7-451b-8490-0b0f8d8bab16',
          process_type: 'MESTRADO',
          process_name: 'Seleção Mestrado Maio 2021',
          process_date_begin: '2021-03-15T00:00:00.000Z',
          process_date_end: '2021-04-01T00:00:00.000Z',
        },
      ])
    );
};
