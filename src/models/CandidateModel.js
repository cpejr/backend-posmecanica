const { v4: uuidv4 } = require("uuid");
const connection = require("../database/connection");

module.exports = {
  async create(candidate) {
    const candidate_id = uuidv4();
    candidate.candidate_id = candidate_id;
    const result = await connection("candidate").insert(candidate);
    return result;
  },

  async getAll() {
    const result = await connection("candidate").select("*");
    return result;
  },

  async getById(candidate_id) {
    const result = await connection("candidate")
      .where({ candidate_id })
      .select("*")
      .first();
    return result;
  },

  async updateById(candidate_id, candidate) {
    candidate.candidate_id = candidate_id;
    const result = await connection("candidate")
      .where({ candidate_id })
      .update(candidate);
    return result;
  },

  async deleteById(candidate_id) {
    const result = await connection("candidate")
      .where({ candidate_id })
      .delete();
    return result;
  },
};
