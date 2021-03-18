exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bank')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('bank').insert([
        {
          bank_id: '91006c89-2210-485c-bf43-207a0b9f6641',
          bank_type: 'DISSERTAÇÃO',
        },
        {
          bank_id: '0de33e6b-e750-4bf5-9a76-28781f341ff9',
          bank_type: 'DISSERTAÇÃO',
        },
        {
          bank_id: 'a5487d0a-41f3-4e70-abfe-c15faf31984b',
          bank_type: 'DISSERTAÇÃO',
        },
        {
          bank_id: 'aa315592-548c-4cec-8421-37ee4275a113',
          bank_type: 'DISSERTAÇÃO',
        },
        {
          bank_id: 'bf473ebd-215b-4a1d-9e7c-006cf1e8c355',
          bank_type: 'DISSERTAÇÃO',
        },
        {
          bank_id: '2c5ffea3-365a-45b5-8cb2-88dd8a0fbd49',
          bank_type: 'DISSERTAÇÃO',
        },
      ])
    );
};
