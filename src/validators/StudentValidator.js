const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      stud_candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      stud_scholarship: Joi.boolean().required(),
      candidate_email: Joi.string().email().required(),
      candidate_name: Joi.string().required(),
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
      field: Joi.string().allow(null, ''),
      filter: Joi.allow(null, ''),
    }),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      stud_id: Joi.string()
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
      stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      stud_registration: Joi.string(),
      stud_defaultPassword: Joi.string().min(8).max(20),
      stud_type: Joi.string()
        .valid('ATIVO', 'DEFENDENDO DISSERTAÇÃO', 'NENHUMA DAS OPÇÕES')
        .insensitive(),
      stud_scholarship: Joi.boolean(),
      stud_prof_advisor: Joi.string(),
      stud_prof_coAdvisor: Joi.string(),
      stud_bank: Joi.string(),
      stud_workplane: Joi.boolean(),
      stud_workplane_date: Joi.date(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  upload: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_name: Joi.string().required(),
      thesis_name: Joi.string().required(),
    }),
  }),
};
