const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      candidate_name: Joi.string().required(),
      candidate_birth: Joi.date().required(),
      candidate_gender: Joi.string().required(),
      candidate_race: Joi.string().required(),
      candidate_nationality: Joi.string().required(),
      candidate_cpf: Joi.string().required(),
      candidate_identity: Joi.string().required(),
      candidate_expedition: Joi.string().required(),
      candidate_civil_state: Joi.string().required(),
      candidate_voter_title: Joi.string().required(),
      candidate_zone_title: Joi.number().positive().required(),
      candidate_section_title: Joi.number().positive().required(),
      candidate_cep: Joi.string().required(),
      candidate_state: Joi.string().required(),
      candidate_city: Joi.string().required(),
      candidate_street: Joi.string().required(),
      candidate_district: Joi.string().required(),
      candidate_country: Joi.string().required(),
      candidate_adress_num: Joi.number().required(),
      candidate_email: Joi.string().email().required(),
      candidate_phone_number: Joi.string().required(),
      candidate_university: Joi.string().required(),
      candidate_graduation: Joi.string().required(),
      candidate_grade: Joi.string()
        .valid('MESTRADO', 'DOUTORADO')
        .insensitive(),
      candidate_grade_date_begin: Joi.date(),
      candidate_grade_date_end: Joi.date(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      candidate_name: Joi.string(),
      candidate_birth: Joi.date(),
      candidate_gender: Joi.string(),
      candidate_race: Joi.string(),
      candidate_nationality: Joi.string(),
      candidate_cpf: Joi.string(),
      candidate_identity: Joi.string(),
      candidate_expedition: Joi.string(),
      candidate_civil_state: Joi.string(),
      candidate_voter_title: Joi.string(),
      candidate_zone_title: Joi.number().positive(),
      candidate_section_title: Joi.number().positive(),
      candidate_cep: Joi.string(),
      candidate_state: Joi.string(),
      candidate_city: Joi.string(),
      candidate_street: Joi.string(),
      candidate_district: Joi.string(),
      candidate_country: Joi.string(),
      candidate_adress_num: Joi.number(),
      candidate_email: Joi.string().email(),
      candidate_phone_number: Joi.string(),
      candidate_university: Joi.string(),
      candidate_graduation: Joi.string(),
      candidate_grade: Joi.string()
        .valid('MESTRADO', 'DOUTORADO')
        .insensitive(),
      candidate_grade_date_begin: Joi.date(),
      candidate_grade_date_end: Joi.date(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string().required(),
    }),
  }),
}
