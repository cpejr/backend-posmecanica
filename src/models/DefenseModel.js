const connection = require("../database/connection");

module.exports = {
  async create(defense) {
    const result = await connection("defense").insert(defense);
    return result;
  },

  async getAll() {
    const result = await connection("defense").select("*");
    return result;
  },

  async getById(defense_id) {
    const result = await connection("defense")
      .where({ defense_id })
      .select("*");
    return result;
  },

  async updateById(defense_id, defense) {
    const result = await connection("defense")
      .where({ defense_id })
      .update(defense);
    return result;
  },

  async deleteById(defense_id) {
    const result = await connection("defense").where({ defense_id }).delete();
    return result;
  },
};
