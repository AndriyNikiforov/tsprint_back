const Joi = require('joi');

const validator = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });
  const { error } = schema.validate(data);

  if (error) {
    return {
      success: false,
      message: error.details.message,
    };
  }

  return true;
};

module.exports = validator;
