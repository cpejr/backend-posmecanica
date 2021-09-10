const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.BODY]: Joi.object().keys({
      prof_name: Joi.string().required(),
      prof_email: Joi.string().email().required(),
      prof_description: Joi.string().required(),
      prof_curriculum: Joi.string().required(),
      prof_birth: Joi.date().required(),
      prof_gender: Joi.string()
        .valid(
          'mulher cis',
          'mulher trans',
          'homem cis',
          'homem trans',
          'nao-binario',
          'agenero',
          'outro'
        )
        .insensitive()
        .required(),
      prof_active: Joi.boolean().required(),
      prof_cpf: Joi.string().required(),
      prof_credential: Joi.boolean().required(),
      prof_type: Joi.string()
        .valid('mestrado', 'doutorado', 'colaborador', 'visitante')
        .insensitive()
        .required(),
      prof_title: Joi.string()
        .valid('Doutor', 'Mestre')
        .insensitive()
        .required(),
      prof_title_year: Joi.number().integer().required(),
      prof_university: Joi.string().required(),
      prof_city: Joi.string().required(),
      prof_state: Joi.string().required(),
      prof_country: Joi.string().required(),
      prof_course: Joi.string().required(),
      prof_treatment: Joi.string().required(),
      prof_workplace: Joi.string().required(),
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
      prof_id: Joi.string()
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
      prof_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      prof_name: Joi.string(),
      prof_email: Joi.string().email(),
      prof_defaultPassword: Joi.string().min(8).max(20),
      prof_birth: Joi.date(),
      prof_gender: Joi.string()
        .valid(
          'mulher cis',
          'mulher trans',
          'homem cis',
          'homem trans',
          'nao-binario',
          'agenero',
          'outro'
        )
        .insensitive(),
      prof_active: Joi.boolean(),
      prof_cpf: Joi.string(),
      prof_credential: Joi.boolean(),
      prof_type: Joi.string()
        .valid('mestrado', 'doutorado', 'colaborador', 'visitante')
        .insensitive(),
      prof_title: Joi.string().valid('Doutor', 'Mestre').insensitive(),
      prof_title_year: Joi.number().integer(),
      prof_university: Joi.string(),
      prof_city: Joi.string(),
      prof_state: Joi.string(),
      prof_country: Joi.string(),
      prof_course: Joi.string(),
      prof_treatment: Joi.string(),
      prof_workplace: Joi.string(),
      prof_description: Joi.string(),
      prof_curriculum: Joi.string(),
    }),
  }),

  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      prof_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  getProfByDisciplineId: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      discipline_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
