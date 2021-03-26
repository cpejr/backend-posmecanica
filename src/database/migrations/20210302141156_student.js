
exports.up = function(knex) {
  return knex.schema.createTable("student", function(table))
};

exports.down = function(knex) {
  
};
