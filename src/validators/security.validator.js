const Joi = require('joi');

const { server } = require('../config/vars');

class Validator {
  verifyApiKey = () => {
    const securityObj = {};
    securityObj[`${server.apiKeyName}`] = Joi.string().required().valid(server.apiKeyValue);
    return Joi.object().keys({ ...securityObj }).options({ allowUnknown: true, stripUnknown: true });
  }
}

module.exports = new Validator();