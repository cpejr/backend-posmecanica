const { v4: uuidv4 } = require('uuid')
const connection = require('../database/connection')

module.exports = {
  async create(search_area) {
    const search_area_id = uuidv4()
    search_area.search_area_id = search_area_id
    const result = await connection('search_area').insert(search_area)
    return result
  },

  async getAll() {
    const result = await connection('search_area').select('*')
    return result
  },

  async getById(search_area_id) {
    const result = await connection('search_area')
      .where({ search_area_id })
      .select('*')
    return result
  },

  async updateById(search_area_id, search_area) {
    const result = await connection('search_area')
      .where({ search_area_id })
      .update(search_area)
    return result
  },

  async deleteById(search_area_id) {
    const result = await connection('search_area').where({ search_area_id }).delete()
    return result
  },
}
