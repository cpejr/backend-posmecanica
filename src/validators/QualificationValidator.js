const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      quali_stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      quali_bank_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      quali_sArea_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      quali_title: Joi.string().required(),
      quali_content: Joi.string().required(),
      quali_number: Joi.number().integer().required(),
      quali_place: Joi.string().required(),
      quali_date: Joi.date().required(),
      quali_approved: Joi.boolean().required(),
    }),
  }),

  getAll: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      times: Joi.number().integer().required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      quali_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      quali_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      quali_title: Joi.string(),
      quali_content: Joi.string(),
      quali_number: Joi.number().integer(),
      quali_place: Joi.string(),
      quali_date: Joi.date(),
      quali_approved: Joi.boolean(),
      quali_defense_id: Joi.string().guid({
        version: ['uuidv4'],
      }),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      quali_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
