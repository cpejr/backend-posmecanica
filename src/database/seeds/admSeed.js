exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("administrator")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("administrator").insert([
        {
          adm_name: "Nando",
          adm_id: "e4752f84-5e77-4fc5-84b1-fbfcf7b96666",
          adm_login: "Ixqueiro",
          adm_password: "BHéquem?BHénós",
          adm_firebase: "Xiqueiro",
        },
      ])
    );
};
