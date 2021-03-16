const environment = process.env.NODE_ENV || "development";
const knex = require("knex");
const configuration = require("../../knexfile")[environment];

console.log(configuration);

const connection = knex(configuration);

module.exports = connection;
