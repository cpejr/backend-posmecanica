const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.BODY]: Joi.object().keys({
      discipline_code: Joi.string().required(),
      discipline_content: Joi.string().required(),
      discipline_name: Joi.string().required(),
      discipline_is_isolated: Joi.boolean().required(),
      discipline_iso_approved: Joi.boolean(),
      discipline_semester: Joi.string()
        .valid('PRIMEIRO', 'SEGUNDO', 'PRIMEIRO_SEGUNDO', 'NAO_OFERTADO')
        .insensitive()
        .required(),
      discipline_type: Joi.string()
        .valid('MESTRADO', 'DOUTORADO')
        .insensitive()
        .required(),
    }),
  }),

  getAll: celebrate({
    [Segments.HEADERS]: Joi.object(),
    [Segments.QUERY]: Joi.object().keys({
      times: Joi.number().integer().required(),
      field: Joi.string().allow(null, ''),
      filter: Joi.allow(null, ''),
    }),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object(),
    [Segments.PARAMS]: Joi.object().keys({
      discipline_id: Joi.string()
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
      discipline_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      discipline_code: Joi.string(),
      discipline_content: Joi.string(),
      discipline_name: Joi.string(),
      discipline_is_isolated: Joi.boolean(),
      discipline_iso_approved: Joi.boolean(),
      discipline_semester: Joi.string()
        .valid('PRIMEIRO', 'SEGUNDO', 'PRIMEIRO_SEGUNDO', 'NAO_OFERTADO')
        .insensitive(),
      discipline_type: Joi.string()
        .valid('MESTRADO', 'DOUTORADO')
        .insensitive(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      discipline_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
