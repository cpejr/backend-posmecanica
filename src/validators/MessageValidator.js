const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.BODY]: Joi.object().keys({
      message_sender_id: Joi.string().required(),
      message_sender_type: Joi.string()
        .valid('aluno', 'administrator')
        .insensitive(),
      message_receiver_id: Joi.string().allow(null, ''),
      message_receiver_type: Joi.string()
        .valid('aluno', 'administrator')
        .insensitive(),
      message_title: Joi.string(),
      message_body: Joi.string().required(),
      message_parent_id: Joi.string().allow(''),
      message_status: Joi.string().valid('new', 'answered').insensitive(),
      message_type: Joi.string()
        .valid('message', 'notification', 'answer')
        .insensitive(),
    }),
  }),

  getById: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  getByStudentId: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      student_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  getByAdmId: celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required(),
      })
      .unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      adm_id: Joi.string()
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
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      message_sender_id: Joi.string(),
      message_sender_type: Joi.string()
        .valid('aluno', 'administrator')
        .insensitive(),
      message_receiver_id: Joi.string().allow(null, ''),
      message_receiver_type: Joi.string()
        .valid('aluno', 'administrator')
        .insensitive(),
      message_title: Joi.string(),
      message_body: Joi.string(),
      message_parent_id: Joi.string().allow(''),
      message_status: Joi.string().valid('new', 'answered').insensitive(),
      message_type: Joi.string()
        .valid('message', 'notification', 'answer')
        .insensitive(),
    }),
  }),
};
