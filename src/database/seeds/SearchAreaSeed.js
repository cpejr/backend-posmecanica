exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('search_area')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('search_area').insert([
        {
          search_area_id: 'bf8446f9-0d92-4658-a22c-a83518ffb2a2',
          search_area_name: 'Analise numerica',
        },
        {
          search_area_id: '0f9af7ac-0ff7-4c62-8ed3-8f16d8ca2247',
          search_area_name: 'Analise numerica',
        },
        {
          search_area_id: '3d0a1f9d-10da-48c7-853e-258bb049c26b',
          search_area_name: 'Analise numerica',
        },
        {
          search_area_id: '6dd1fb29-6cbd-4124-b009-990fddc33c22',
          search_area_name: 'Analise numerica',
        },
      ])
    );
};
