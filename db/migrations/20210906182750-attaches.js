module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('attaches', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      path: Sequelize.DataTypes.STRING,
      name: Sequelize.DataTypes.STRING,
      size: Sequelize.DOUBLE,
      entity_id: Sequelize.INTEGER,
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('attaches');
  },
};
