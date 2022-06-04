const Joi = require('joi');

class Validator {
  createUser = () => {
    return Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      birthdate: Joi.date().optional(),
      address: Joi.string().optional(),
      city: Joi.string().optional(),
      state: Joi.string().optional(),
      country: Joi.string().optional(),
      zipcode: Joi.number().optional(),
      phone: Joi.number().optional()
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  getUser = () => {
    return Joi.object().keys({
      id: Joi.number().optional()
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  updateUser = () => {
    return Joi.object().keys({
      id: Joi.number().required(),
      name: Joi.string().optional(),
      email: Joi.string().email().optional(),
      password: Joi.string().optional(),
      birthdate: Joi.date().optional(),
      address: Joi.string().optional(),
      city: Joi.string().optional(),
      state: Joi.string().optional(),
      country: Joi.string().optional(),
      zipcode: Joi.number().optional(),
      phone: Joi.number().optional()
    }).options({ allowUnknown: true, stripUnknown: true });
  }

  deleteUser = () => {
    return Joi.object().keys({
      id: Joi.number().required()
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new Validator();