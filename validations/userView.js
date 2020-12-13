const Joi = require('joi');

exports.all = {
  query: Joi.object({
    type  : Joi.string().optional().valid('daily','weekly','monthly','custom'),
    from  : Joi.date().when('type', {
      is: 'custom',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    to   :  Joi.date().optional()
  })
};