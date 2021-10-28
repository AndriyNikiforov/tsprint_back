const Joi = require('joi');

const validator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string(),
    password: Joi.string().min(6),
    image_id: Joi.number(),
  });
  const { error } = schema.validate(data);

  if (error) {
    return {
      success: false,
      message: error.details,
    };
  }

  return true;
};

module.exports = validator;
