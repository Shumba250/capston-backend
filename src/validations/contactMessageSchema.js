import Joi from 'joi';

const contactMessageValidation = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  subject: Joi.string().min(10).required(),
  message: Joi.string().min(15).required(),
});

export { contactMessageValidation };
