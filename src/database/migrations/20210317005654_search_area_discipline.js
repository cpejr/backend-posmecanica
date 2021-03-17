exports.up = function (knex) {
  return knex.schema.createTable('search_area_discipline', (table) => {
    table.increments('search_dis_id').primary().notNullable();
    table.uuid('sAd_dis_id').notNullable();
    table.uuid('sAd_research_id').notNullable();

    table
      .foreign('sAd_research_id')
      .references('search_area_id')
      .inTable('search_area')
      .onDelete('CASCADE');
    table
      .foreign('sAd_dis_id')
      .references('discipline_id')
      .inTable('discipline')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('search_area_discipline');
};
