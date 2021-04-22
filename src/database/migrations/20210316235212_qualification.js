exports.up = function (knex) {
  return knex.schema.createTable('qualification', (table) => {
    table.uuid('quali_id').primary().notNullable();
    table.uuid('quali_stud_id');
    table.uuid('quali_bank_id');
    table.uuid('quali_sArea_id');
    table.uuid('quali_defense_id');
    table.string('quali_title').notNullable();
    table.text('quali_content', 'longtext').notNullable();
    table.integer('quali_number').notNullable();
    table.string('quali_place').notNullable();
    table.datetime('quali_date').notNullable();
    table.boolean('quali_approved').defaultTo(false).notNullable();

    table
      .foreign('quali_stud_id')
      .references('stud_id')
      .inTable('student')
      .onDelete('set null');
    table
      .foreign('quali_bank_id')
      .references('bank_id')
      .inTable('bank')
      .onDelete('set null');
    table
      .foreign('quali_sArea_id')
      .references('search_area_id')
      .inTable('search_area')
      .onDelete('set null');
    table
      .foreign('quali_defense_id')
      .references('defense_id')
      .inTable('defense')
      .onDelete('set null');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('qualification');
};
