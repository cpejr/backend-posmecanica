const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  connect: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      sAd_dis_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      sAd_research_ids: Joi.array()
        .items({
          sAd_research_id: Joi.string().guid({
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
      search_dis_id: Joi.number().integer().required(),
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
    }),
  }),
};
