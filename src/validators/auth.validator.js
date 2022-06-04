const Joi = require('joi');

class Validator {
  login = () => {
    return Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new Validator();