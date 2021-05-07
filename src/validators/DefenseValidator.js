const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      defense_stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      defense_bank_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      defense_sArea_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      defense_type: Joi.string()
        .valid('DISSERTACAO', 'TESE')
        .insensitive()
        .required(),
      defense_title: Joi.string().required(),
      defense_content: Joi.string().required(),
      defense_number: Joi.number().integer().required(),
      defense_place: Joi.string().required(),
      defense_date: Joi.date().required(),
      defense_approved: Joi.boolean().required(),
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
      field: Joi.string(),
      filter: Joi.string().allow(null, ''),
    }),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      defense_id: Joi.string()
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
      defense_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      defense_type: Joi.string().valid('DISSERTACAO', 'TESE').insensitive(),
      defense_title: Joi.string(),
      defense_content: Joi.string(),
      defense_number: Joi.number().integer(),
      defense_place: Joi.string(),
      defense_date: Joi.date(),
      defense_approved: Joi.boolean(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      defense_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
