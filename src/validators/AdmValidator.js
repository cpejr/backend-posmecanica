const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    // [Segments.HEADERS]: Joi.object()
    //   .keys({
    //     authorization: Joi.string().required(),
    //   })
    //   .unknown(),
    [Segments.BODY]: Joi.object().keys({
      adm_name: Joi.string().required(),
      adm_email: Joi.string().email().required(),
    }),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      adm_id: Joi.string()
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
      adm_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      adm_name: Joi.string(),
      adm_defaultPassword: Joi.string().min(8).max(20),
      adm_email: Joi.string().email(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      adm_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
