/* eslint-disable class-methods-use-this */
const { Op } = require('sequelize');
const TestRun = require('../models/TestRun');
const TestCase = require('../models/TestCase');
const { sequelize } = require('../models/TestRun');

class TestRunService {
  async list(requestData) {
    const testRunsData = await TestRun.findAll({
      attributes: [
        '*',
        [sequelize.fn('COUNT', sequelize)],
      ],
      include: [
        {
          model: TestCase,
          required: false,
          attributes: ['id as test_case_id'],
        },
      ],
      where: {
        test_sprint_id: requestData.id,
        '$TestCase.test_run_id$': {
          [Op.eq]: 'id',
        },
      },
    });

    return {
      success: true,
      testRuns: testRunsData,
    };
  }
}

module.exports = new TestRunService();
