const connection = require("../database/connection");

module.exports = {
  async create(administrator) {
    const result = await connection("administrator").insert(administrator);
    return result;
  },

  async getAll() {
    const result = await connection("administrator").select("*");
    return result;
  },

  async getById(adm_id) {
    const result = await connection("administrator")
      .where({ adm_id })
      .select("*");
    return result;
  },

  async updateById(adm_id, administrator) {
    const result = await connection("administrator")
      .where({ adm_id })
      .update(administrator);
    return result;
  },

  async deleteById(adm_id) {
    const result = await connection("administrator").where({ adm_id }).delete();
    return result;
  },
};
