const Joi = require('joi');

const validator = (data) => {
  let options = {
    type: Joi.string().required(),
    priority: Joi.string().required(),
    status: Joi.string().required(),
    description: Joi.string(),
    preconditions: Joi.string(),
    steps: Joi.object(),
    user_id: Joi.number().required(),
    test_suite_id: Joi.number().required(),
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
