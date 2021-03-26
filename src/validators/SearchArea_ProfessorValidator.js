const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  connect: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      sp_professor_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      searchArea_ids: Joi.array()
        .items({
          sp_searchArea_id: Joi.string().guid({
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
      searchArea_professor_id: Joi.number().integer().required(),
    }),
  }),
};
