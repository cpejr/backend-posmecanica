exports.up = function (knex) {
  return knex.schema.table('candidate', (table) => {
    table.string('first_discipline_isolated').defaultTo('none').notNullable();
    table.string('second_discipline_isolated').defaultTo('none').notNullable();
    table.string('third_discipline_isolated').defaultTo('none').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('candidate', () => {
    // table.dropColumn('first_discipline_isolated');
    // table.dropColumn('second_discipline_isolated');
    // table.dropColumn('third_discipline_isolated');
  });
};
