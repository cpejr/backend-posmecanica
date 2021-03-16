const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      bank_type: Joi.string().valid('DISSERTAÇÃO','TESE','QUALIFICAÇÃO').insensitive().required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      bank_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        bank_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
        bank_type: Joi.string().valid('DISSERTAÇÃO','TESE','QUALIFICAÇÃO').insensitive(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        bank_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
