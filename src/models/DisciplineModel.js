const connection = require('../database/connection');

module.exports = {
  async create(discipline) {
    const result = await connection('discipline').insert(discipline);
    return result;
  },

  async getAll(times, field, filter) {
    const limit = 50;
    let disciplineTable;
    if (field && filter) {
      disciplineTable = await connection('discipline')
        .where(field, 'ilike', `%${filter}%`)
        .select('*')
        .limit(limit)
        .offset(limit * times);
    } else {
      disciplineTable = await connection('discipline')
        .select('*')
        .limit(limit)
        .offset(limit * times);
    }
    const professorTable = await connection('professor').select(
      'prof_id',
      'prof_name',
      'prof_email'
    );
    const prof_discTable = await connection('professor_discipline');

    disciplineTable.forEach((discipline) => {
      const relation = [];
      const profRelation = prof_discTable.filter(
        (elements) => elements.pd_dis_id === discipline.discipline_id
      );
      profRelation.forEach((ids) => {
        relation.push(
          professorTable.find(
            (element) => element.prof_id === ids.pd_professor_id
          )
        );
      });
      discipline.professors = relation;
    });

    const result = disciplineTable;
    return result;
  },

  async getById(discipline_id) {
    const disciplineObject = await connection('discipline')
      .where({ discipline_id })
      .select('*')
      .first();
    const professorTable = await connection('professor').select(
      'prof_id',
      'prof_name',
      'prof_email'
    );
    const prof_discTable = await connection('professor_discipline');

    const relation = [];
    const profRelation = prof_discTable.filter(
      (elements) => elements.pd_dis_id === disciplineObject.discipline_id
    );
    profRelation.forEach((ids) => {
      relation.push(
        professorTable.find(
          (element) => element.prof_id === ids.pd_professor_id
        )
      );
    });
    disciplineObject.professors = relation;

    const result = disciplineObject;
    return result;
  },

  async updateById(discipline_id, discipline) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .update(discipline);
    return result;
  },

  async deleteById(discipline_id) {
    const result = await connection('discipline')
      .where({ discipline_id })
      .delete();
    return result;
  },
};
