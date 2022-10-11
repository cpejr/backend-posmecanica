exports.up = async function (knex) {
  await knex.schema.alterTable('candidate', (table) => {
    table.string('candidate_protocol_number').unique();
  });
  await knex.schema.raw(`
                    ALTER TABLE "candidate"
                    ALTER COLUMN "candidate_protocol_number"
                    DROP DEFAULT;
                    `);
};

exports.down = async function (knex) {
  await knex.schema.raw(`
                  ALTER TABLE "candidate"
                  ALTER COLUMN "candidate_protocol_number"
                  `);
  await knex.schema.alterTable('candidate', (table) => {
    table.dropColumn('candidate_protocol_number');
  });
};
