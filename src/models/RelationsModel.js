const connection = require('../database/connection');

const convertBoolean = (data) => {
  const fixObject = (item) => {
    if (item?.cd_dis_deferment !== null)
      item.cd_dis_deferment = !!item.cd_dis_deferment;
  };
  if (data[1]) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
      fixObject(item);
    }
  } else {
    fixObject(data);
  }
  return data;
};

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
      if (table === 'candidate_dis') return convertBoolean(result);
      return result;
    }
    const result = await connection(table)
      .limit(limit)
      .offset(limit * times);
    if (table === 'candidate_dis') return convertBoolean(result);
    return result;
  },
  async getByIdDisciplineDeferment(table, firstFilter, secondFilter) {
    const result = await connection(table)
      .where('cd_candidate_id', firstFilter)
      .where('cd_dis_id', secondFilter)
      .select('*');
    if (table === 'candidate_dis') return convertBoolean(result);
    return result;
  },
  async getByIdDisciplineDefermentCandidateSituation(table, filter, situation) {
    const result = await connection(table)
      .where('cd_candidate_id', filter)
      .where('cd_dis_deferment', situation)
      .select('*');
    if (table === 'candidate_dis') return convertBoolean(result);
    return result;
  },
  async updateById(table, field, data) {
    const result = await connection(table).where(field).update(data);
    return result;
  },
  async updateByIdDisciplineDeferment(table, cd_candidate_id, cd_dis_id, data) {
    const result = await connection(table)
      .where({ cd_candidate_id })
      .where({ cd_dis_id })
      .update(data);
    return result;
  },
};
