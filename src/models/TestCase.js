const { sequelize: Sequelize, DataTypes, Model } = require('../../config/db');

class TestCase extends Model { }

TestCase.init({
  type: DataTypes.STRING,
  priority: DataTypes.STRING,
  references: DataTypes.STRING,
  status: DataTypes.STRING,
  keywords: DataTypes.JSON,
  scope: DataTypes.STRING,
  description: DataTypes.TEXT,
  preconditions: DataTypes.TEXT,
  steps: DataTypes.JSON,
  user_id: DataTypes.INTEGER,
  test_suite_id: DataTypes.INTEGER,
}, {
  sequelize: Sequelize,
  modelName: 'TestCase',
  tableName: 'test_cases',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = TestCase;
