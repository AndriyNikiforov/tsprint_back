/* eslint-disable class-methods-use-this */

const TestRunValidator = require('../validators/TestRunValidation');

class TestRunController {
  async list(request, response) {
    const { body: data } = request;
    const resultValidation = TestRunValidator(data);

    if (!resultValidation) {
      return response.json(resultValidation);
    }

    return response.json();
  }

  async create(request, response) {

  }

  async detail(request, response) {

  }

  async update(request, response) {

  }

  async remove(request, response) {

  }
}

module.exports = TestRunController;
