exports.up = function (knex) {
  return knex.schema.createTable('message', (table) => {
    table.uuid('message_id').primary().notNullable();
    table.string('message_sender_id').notNullable();
    table.enu('message_sender_type', ['aluno', 'administrator']);
    table.string('message_receiver_id').notNullable();
    table.enu('message_receiver_type', ['aluno', 'administrator']);
    table.string('message_title');
    table.string('message_body').notNullable();
    table.string('message_parent_id');
    table.enu('message_status', ['new', 'answered']).defaultTo('new');
    table.enu('message_type', ['message', 'notification']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('message');
};
