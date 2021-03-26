exports.up = function (knex) {
  return knex.schema.createTable('searchArea_professor', (table) => {
    table.increments('searchArea_professor_id').primary().notNullable();
    table.uuid('sp_professor_id').notNullable();
    table.uuid('sp_searchArea_id').notNullable();

    table
      .foreign('sp_professor_id')
      .references('prof_id')
      .inTable('professor')
      .onDelete('CASCADE');
    table
      .foreign('sp_searchArea_id')
      .references('search_area_id')
      .inTable('search_area')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('searchArea_professor');
};
