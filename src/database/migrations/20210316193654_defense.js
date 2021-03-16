exports.up = function(knex) {
    return knex.schema.createTable("defense", function (table) {
        table.string("defense_id").primary().notNullable(); 
        table.string("defense_stud_id").references('stud_id').inTable('student').onDelete('CASCADE');
        table.enu('defense_type', ['DISSERTAÇÃO', 'TESE']);
        table.string("defense_title").notNullable();
        table.string("defense_content").notNullable();
        table.foreign("defense_bank_id").references('bank_id').inTable('bank').onDelete('CASCADE'); 
        table.foreign("defense_sArea_id").references('search_area_id').inTable('search_area').onDelete('CASCADE'); 
        table.integer("defense_number").notNullable(); 
        table.string("defense_place").notNullable(); 
        table.date("defense_date").notNullable(); 
        table.string("defense_time").notNullable(); 
        table.boolean("defense_approved").notNullable(); 
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("defense");
};