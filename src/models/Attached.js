const { sequelize: Sequelize, DataTypes, Model } = require('../../config/db');

class Attached extends Model {}

Attached.init({
  path: DataTypes.STRING,
  name: DataTypes.STRING,
  size: DataTypes.DOUBLE,
  entity_id: DataTypes.INTEGER,
}, {
  sequelize: Sequelize,
  modelName: 'Attached',
  tableName: 'attaches',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Attached;
