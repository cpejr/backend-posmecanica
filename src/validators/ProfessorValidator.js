const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      prof_name: Joi.string().required(),
      prof_email: Joi.string().email().required(),
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
      prof_title: Joi.string().valid('Doutor', 'Mestre').insensitive(),
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

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      prof_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
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
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      prof_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
