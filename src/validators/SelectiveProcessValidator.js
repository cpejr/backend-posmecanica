const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      process_type: Joi.string()
        .valid('MESTRADO', 'DOUTORADO', 'ISOLADA')
        .insensitive()
        .required(),
      process_name: Joi.string().required(),
      process_date_begin: Joi.date().required(),
      process_date_end: Joi.date().required(),
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
        .valid('MESTRADO', 'DOUTORADO', 'ISOLADA')
        .insensitive(),
      process_name: Joi.string(),
      process_date_begin: Joi.date(),
      process_date_end: Joi.date(),
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
