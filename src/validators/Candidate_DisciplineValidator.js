const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  connect: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      cd_candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      cd_dis_ids: Joi.array()
        .items({
          cd_dis_id: Joi.string()
            .allow('', null)
            .guid({
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
      candidate_dis_id: Joi.number().integer().required(),
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

  getByIdDisciplineDeferment: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.QUERY]: Joi.object().keys({
      firstFilter: Joi.required(),
      secondFilter: Joi.required(),
    }),
  }),

  getByIdDisciplineDefermentCandidateSituation: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.QUERY]: Joi.object().keys({
      filter: Joi.required(),
      situation: Joi.required(),
    }),
  }),

  update: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      candidate_dis_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      cd_dis_deferment: Joi.boolean(),
    }),
  }),

  updateByIdDisciplineDeferment: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      cd_candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      cd_dis_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      cd_dis_deferment: Joi.boolean(),
    }),
  }),
};
