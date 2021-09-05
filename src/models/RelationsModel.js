const connection = require('../database/connection');

module.exports = {
  async connect(ids, id, table, field) {
    const arrays = Object.keys(ids);
    const newRelations = [];
    ids[arrays].forEach((item) => {
      const newRelation = {
        [field]: id,
        ...item,
      };
      newRelations.push(newRelation);
    });
    const result = await connection(table).insert(newRelations);
    return result;
  },
  async disconnect(id, table, field) {
    const result = await connection(table)
      .where({ [field]: id })
      .delete();
    return result;
  },
  async getAll(table, times, field, filter) {
    const limit = 50;
    if (field && filter) {
      const result = await connection(table).where(field, filter).select('*');
      return result;
    }
    const result = await connection(table)
      .limit(limit)
      .offset(limit * times);
    return result;
  },
};
