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
      message_type: Joi.string().valid('message').insensitive(),
    }),
  }),
};
