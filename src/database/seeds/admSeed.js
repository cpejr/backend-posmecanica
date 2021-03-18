exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('administrator')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('administrator').insert([
        {
          adm_id: '230af1d7-1dd3-48f5-99ed-5cf50da7a9be',
          adm_firebase: 'Mith1wUldMd4iTEVO0d0Ybk0aYq2',
          adm_defaultPassword: '4ccb855b9fc165fa',
          adm_name: 'Nando',
          adm_email: 'Ixqueiro5@gmail.com',
        },
        {
          adm_id: '39485045-c510-47b4-9358-fc5ddbf51d63',
          adm_firebase: 'qZrW4DKzyMSoctOpHo9qFZ6RtuX2',
          adm_defaultPassword: '1f0285996bb2f062',
          adm_name: 'Nando',
          adm_email: 'Ixqueiro6@gmail.com',
        },
      ])
    );
};
