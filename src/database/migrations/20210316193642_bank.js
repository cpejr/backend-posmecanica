exports.up = function (knex) {
  return knex.schema.createTable('bank', (table) => {
    table.uuid('bank_id').primary().notNullable();
    table.enu('bank_type', ['DISSERTACAO', 'TESE', 'QUALIFICACAO']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bank');
};
