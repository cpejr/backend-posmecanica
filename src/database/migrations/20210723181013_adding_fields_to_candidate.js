exports.up = function (knex) {
  return knex.schema.table('candidate', (table) => {
    table.string('first_discipline_isolated');
    table.string('second_discipline_isolated');
    table.string('third_discipline_isolated');
    table.string('fourth_discipline_isolated');
  });
};

exports.down = function (knex) {
  return knex.schema.table('candidate', () => {
    // table.dropColumn('first_discipline_isolated');
    // table.dropColumn('second_discipline_isolated');
    // table.dropColumn('third_discipline_isolated');
  });
};
