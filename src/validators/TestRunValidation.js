const Joi = require('joi');

const validator = (data) => {
  let options = {
    user_id: Joi.number().required(),
    name: Joi.string().required(),
    status: Joi.string(),
    description: Joi.string(),
  };
  options = (Object.prototype.hasOwnProperty.call(data, 'id')) ? {
    ...options,
    id: Joi.number().required(),
  } : { ...options };

  const schema = Joi.object(options);
  const { error } = schema.validate(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return true;
};

module.exports = validator;
