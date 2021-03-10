exports.up = function (knex) {
  return knex.schema.createTable("administrator", function (table) {
    table.string("adm_id").primary().notNullable();
    table.string("adm_firebase").notNullable();
    table.string("adm_name").notNullable();
    table.string("adm_password").notNullable();
    table.string("adm_login").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("administrator");
};
