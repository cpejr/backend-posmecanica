const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),

    [Segments.BODY]: Joi.object().keys({
      candidate_name: Joi.string().required(),
      candidate_birth: Joi.date().required(),
      candidate_gender: Joi.string()
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
      candidate_race: Joi.string().required(),
      candidate_nationality: Joi.string().required(),
      candidate_cpf: Joi.string().required(),
      candidate_identity: Joi.string().required(),
      candidate_mother_name: Joi.string().required(),
      candidate_father_name: Joi.string().required(),
      candidate_expedition: Joi.string().required(),
      candidate_civil_state: Joi.string().required(),
      candidate_voter_title: Joi.string().required(),
      candidate_zone_title: Joi.number().positive().required(),
      candidate_section_title: Joi.number().positive().required(),
      candidate_cep: Joi.string().required(),
      candidate_state: Joi.string().required(),
      candidate_city: Joi.string().required(),
      candidate_street: Joi.string().required(),
      candidate_district: Joi.string().required(),
      candidate_country: Joi.string().required(),
      candidate_adress_num: Joi.number().required(),
      candidate_complement: Joi.string(),
      candidate_email: Joi.string().email().required(),
      candidate_phone_number: Joi.string().required(),
      candidate_university: Joi.string().required(),
      candidate_graduation: Joi.string().required(),
      candidate_grade: Joi.string()
        .valid('MESTRADO', 'DOUTORADO', 'NENHUMA DAS OPÇÕES')
        .insensitive(),
      candidate_grade_date_begin: Joi.date(),
      candidate_grade_date_end: Joi.date(),
      candidate_pGraduate_university: Joi.string(),
      candidate_pGraduation_course: Joi.string(),
      candidate_ufmg_active_serv: Joi.boolean(),
      candidate_ufmg_retired_serv: Joi.boolean(),
      candidate_date_inscrition: Joi.date().required(),
      candidate_form_approval: Joi.boolean(),
      candidate_test_approval: Joi.boolean(),
      candidate_curriculum_approval: Joi.boolean(),
      candidate_rating: Joi.number().integer(),
      candidate_deferment: Joi.boolean(),
      first_discipline_isolated: Joi.string().allow('', null),
      second_discipline_isolated: Joi.string().allow('', null),
      third_discipline_isolated: Joi.string().allow('', null),
      fourth_discipline_isolated: Joi.string().allow('', null),
      candidate_justify: Joi.string(),
      candidate_grade_obtained: Joi.string(),
      candidate_study_regimen: Joi.string(),
      candidate_scholarship: Joi.boolean(),
      candidate_concentration_area: Joi.string(),
      candidate_PcD: Joi.boolean(),
    }),
  }),
  delete: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  getUrl: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      file_name: Joi.string().required(),
    }),
  }),
  getFiles: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      file_name: Joi.string()
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
      candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      candidate_name: Joi.string(),
      candidate_birth: Joi.date(),
      candidate_gender: Joi.string(),
      candidate_race: Joi.string(),
      candidate_nationality: Joi.string(),
      candidate_cpf: Joi.string(),
      candidate_identity: Joi.string(),
      candidate_expedition: Joi.string(),
      candidate_civil_state: Joi.string(),
      candidate_voter_title: Joi.string(),
      candidate_zone_title: Joi.number().positive(),
      candidate_section_title: Joi.number().positive(),
      candidate_cep: Joi.string(),
      candidate_state: Joi.string(),
      candidate_city: Joi.string(),
      candidate_street: Joi.string(),
      candidate_district: Joi.string(),
      candidate_country: Joi.string(),
      candidate_adress_num: Joi.number(),
      candidate_email: Joi.string().email(),
      candidate_phone_number: Joi.string(),
      candidate_university: Joi.string(),
      candidate_graduation: Joi.string(),
      candidate_grade: Joi.string()
        .valid('MESTRADO', 'DOUTORADO')
        .insensitive(),
      candidate_grade_date_begin: Joi.date(),
      candidate_grade_date_end: Joi.date(),
      candidate_pGraduate_university: Joi.string(),
      candidate_ufmg_active_serv: Joi.boolean(),
      candidate_ufmg_retired_serv: Joi.boolean(),
      candidate_date_inscrition: Joi.date(),
      candidate_form_approval: Joi.boolean(),
      candidate_test_approval: Joi.boolean(),
      candidate_curriculum_approval: Joi.boolean(),
      candidate_rating: Joi.number().integer(),
      candidate_deferment: Joi.boolean(),
      first_discipline_isolated: Joi.string(),
      second_discipline_isolated: Joi.string(),
      third_discipline_isolated: Joi.string(),
      fourth_discipline_isolated: Joi.string(),
      candidate_justify: Joi.string(),
      candidate_grade_obtained: Joi.string(),
      candidate_study_regimen: Joi.string(),
      candidate_scholarship: Joi.boolean(),
      candidate_concentration_area: Joi.string(),
      candidate_PcD: Joi.boolean(),
    }),
  }),
  upload: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      candidate_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      fileName: Joi.string().required(),
    }),
  }),
};
