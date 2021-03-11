const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      adm_name: Joi.string().required(),
      adm_firebase: Joi.string().required(),
      adm_password: Joi.string().min(8).max(20).required(),
      adm_login: Joi.string().required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      adm_id: Joi.string().required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      adm_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      adm_name: Joi.string(),
      adm_firebase: Joi.string(),
      adm_password: Joi.string().min(8).max(20),
      adm_login: Joi.string(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      adm_id: Joi.string().required(),
    }),
  }),
}
