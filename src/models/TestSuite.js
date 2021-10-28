const { sequelize: Sequelize, DataTypes, Model } = require('../../config/db');

class TestSuite extends Model { }

TestSuite.init({
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  test_run_id: DataTypes.INTEGER,
}, {
  sequelize: Sequelize,
  modelName: 'TestSuite',
  tableName: 'test_suites',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = TestSuite;
