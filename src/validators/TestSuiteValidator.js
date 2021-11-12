const Joi = require('joi');

const validator = (data) => {
  let options = {
    name: Joi.string().required(),
    description: Joi.string(),
    test_run_id: Joi.number().required(),
  };
  options = (Object.prototype.hasOwnProperty.call(data, 'id')) ? {
    ...options,
    id: Joi.number().required(),
  } : { ...options };

  const schema = Joi.object(options);
  const { error } = schema.validate(schema);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return true;
};

module.exports = validator;
