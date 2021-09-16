const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
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

  getAll: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.QUERY]: Joi.object().keys({
      times: Joi.number().integer().required(),
      field: Joi.string().allow(null, ''),
      filter: Joi.allow(null, ''),
    }),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
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
      candidate_quantity: Joi.number().integer(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
