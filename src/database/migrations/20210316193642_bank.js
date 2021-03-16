exports.up = function(knex) {
    return knex.schema.createTable("bank", function (table) {
        table.string("bank_id").primary().notNullable();
        table.enu("bank_type",['DISSERTAÇÃO','TESE','QUALIFICAÇÃO']);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('bank');
};