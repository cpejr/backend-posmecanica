const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      process_type: Joi.string()
        .valid('MESTRADO','DOUTORADO', 'ISOLADA')
        .insensitive()
        .required(),
      process_name: Joi.string().required(),
      process_date_begin: Joi.date().required(),
      process_date_end: Joi.date().required(),
      process_date_inscrition: Joi.date().required(),
      process_protocol: Joi.string().required(),
      process_form_approval: Joi.boolean().required(),
      process_test_approval: Joi.boolean().required(),
      process_curriculum_approval: Joi.boolean().required(),
      process_rating: Joi.number().required(),
      process_candidate_id: Joi.string().required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      process_type: Joi.string()
      .valid('MESTRADO','DOUTORADO', 'ISOLADA')
      .insensitive(),
      process_name: Joi.string(),
      process_date_begin: Joi.date(),
      process_date_end: Joi.date(),
      process_date_inscrition: Joi.date(),
      process_protocol: Joi.string(),
      process_form_approval: Joi.boolean(),
      process_test_approval: Joi.boolean(),
      process_curriculum_approval: Joi.boolean(),
      process_rating: Joi.number(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
