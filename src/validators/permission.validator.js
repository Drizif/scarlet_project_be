const Joi = require('joi');

class Validator {
  createPermission = () => {
    return Joi.object().keys({
      name: Joi.string().required(),
      modules: Joi.array().items(Joi.object().keys({
        id: Joi.number().required(),
        actions: Joi.array().items(
          Joi.object().keys({
            r: Joi.boolean().required(),
            w: Joi.boolean().required(),
            d: Joi.boolean().required(),
            u: Joi.boolean().required()
          })
        )
      })).required()

    }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new Validator();