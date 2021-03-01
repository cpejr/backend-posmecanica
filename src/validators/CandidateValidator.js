const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      candidate_name: Joi.string().required(),
      candidate_birth: Joi.date().required(),
      candidate_gender: Joi.string().valid('Masculino', 'Feminino').required(),
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
      candidate_num: Joi.string().required(),
      candidate_email: Joi.string().email().required(),
      candidate_phone_number: Joi.string().required(),
      candidate_master_degree: Joi.boolean(),
      candidate_masterD_date: Joi.date(),
      candidate_justification: Joi.string(),
      candidate_info: Joi.string(),
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
      candidate_gender: Joi.string().valid('Masculino', 'Feminino').required(),
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
      candidate_num: Joi.string().required(),
      candidate_email: Joi.string().email().required(),
      candidate_phone_number: Joi.string().required(),
      candidate_master_degree: Joi.boolean(),
      candidate_masterD_date: Joi.date(),
      candidate_justification: Joi.string(),
      candidate_info: Joi.string(),
    }),    
  }),
  
  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string().required(),
    }),
  }),
};