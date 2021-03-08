const { celebrate, Segments, Joi } = require("celebrate");

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
      candidate_street: Joi.string().required(),
      candidate_district: Joi.string().required(),
      candidate_country: Joi.string().required(),
      candidate_adress_num: Joi.string().required(),
      candidate_email: Joi.string().email().required(),
      candidate_phone_number: Joi.string().required(),
      candidate_university: Joi.string().required(),
      candidate_graduation: Joi.string().required(),
      candidate_grade: Joi.string().valid('Mestrado', 'Doutorado').insensitive(),
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
      candidate_street: Joi.string().required(),
      candidate_district: Joi.string().required(),
      candidate_country: Joi.string().required(),
      candidate_adress_num: Joi.string().required(),
      candidate_email: Joi.string().email().required(),
      candidate_phone_number: Joi.string().required(),
      candidate_university: Joi.string().required(),
      candidate_graduation: Joi.string().required(),
      candidate_grade: Joi.string().valid('Mestrado', 'Doutorado').insensitive(),
      candidate_grade_date_begin: Joi.date(),
      candidate_grade_date_end: Joi.date(),
    }),    
  }),
  
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string().required(),
    }),
  }),
};