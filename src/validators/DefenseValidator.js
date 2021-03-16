const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      defense_stud_id: Joi.string()
        .guid({
          version: ["uuidv4"],
        })
        .required(),
        defense_bank_id: Joi.string()
        .guid({
          version: ["uuidv4"],
        })
        .required(),
        defense_sArea_id: Joi.string()
        .guid({
          version: ["uuidv4"],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      defense_type: Joi.string()
        .valid("DISSERTAÇÃO", "TESE")
        .insensitive()
        .required(),
      defense_title: Joi.string().required(),
      defense_content: Joi.string().required(),
      defense_number: Joi.integer().required(),
      defense_place: Joi.string().required(),
      defense_date: Joi.date().required(),
      defense_time: Joi.string().required(),
      defense_approved: Joi.boolean().required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      defense_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      defense_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      //Ele tem que poder mudar as suas foreign keys???? acho q n né
      defense_type: Joi.string()
        .valid("DISSERTAÇÃO", "TESE")
        .insensitive(),
      defense_title: Joi.string(),
      defense_content: Joi.string(),
      defense_number: Joi.integer(),
      defense_place: Joi.string(),
      defense_date: Joi.date(),
      defense_time: Joi.string(),
      defense_approved: Joi.boolean(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      defense_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
