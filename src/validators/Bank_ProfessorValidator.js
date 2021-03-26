const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  connect: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      bp_bank_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      bp_professor_ids: Joi.array()
        .items({
          bp_professor_id: Joi.string().guid({
            version: ['uuidv4'],
          }),
        })
        .required(),
    }),
  }),

  disconnect: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      bank_professor_id: Joi.number().integer().required(),
    }),
  }),
};
