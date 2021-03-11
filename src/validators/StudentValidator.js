const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      stud_process_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      stud_name: Joi.string().required(),
      stud_firebase: Joi.string().token().required(),
      stud_registration: Joi.string().required(),
      stud_password: Joi.string().min(8).max(20).required(),
      stud_email: Joi.string().email().required(),
      stud_scholarship: Joi.boolean().required(),
      stud_prof_advisor: Joi.string().required(),
      stud_prof_coAdvisor: Joi.string().required(),
      stud_workplane: Joi.boolean().required(),
      stud_workplane_date: Joi.date().required(),
      stud_type: Joi.string()
        .valid('MESTRADO', 'DOUTORADO')
        .insensitive()
        .required(),
    }),
  }),

  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),

  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      stud_name: Joi.string(),
      stud_registration: Joi.string(),
      stud_password: Joi.string().min(8).max(20),
      stud_email: Joi.string().email(),
      stud_scholarship: Joi.boolean(),
      stud_prof_advisor: Joi.string(),
      stud_prof_coAdvisor: Joi.string(),
      stud_workplane: Joi.boolean(),
      stud_workplane_date: Joi.date(),
      stud_type: Joi.string().valid('MESTRADO', 'DOUTORADO').insensitive(),
    }),
  }),

  delete: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      stud_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
};
