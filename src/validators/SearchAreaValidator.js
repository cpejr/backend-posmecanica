const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.BODY]: Joi.object().keys({
      search_area_name: Joi.string().required(),
    }),
  }),

  getAll: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      times: Joi.number().integer().required(),
      field: Joi.string().allow(null, ''),
      filter: Joi.allow(null, ''),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      search_area_id: Joi.string()
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
      search_area_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      search_area_name: Joi.string(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      search_area_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
