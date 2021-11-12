const TestRun = require('../models/TestRun');

class TestRunService {
  async list(requestData) {
    const data = await TestRun.findAll({
      where: {

      }
    });
  }
}

module.exports = new TestRunService();
