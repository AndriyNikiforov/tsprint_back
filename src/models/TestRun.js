const { sequelize: Sequelize, DataTypes, Model } = require('../../config/db');

class TestRun extends Model {}

TestRun.init({
  user_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  status: DataTypes.STRING,
  description: DataTypes.TEXT,
}, {
  sequelize: Sequelize,
  modelName: 'TestRun',
  tableName: 'test_runs',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = TestRun;
