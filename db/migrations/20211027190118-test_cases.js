module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('test_cases', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: Sequelize.DataTypes.STRING,
      priority: Sequelize.DataTypes.STRING,
      references: Sequelize.DataTypes.STRING,
      status: Sequelize.DataTypes.STRING,
      keywords: Sequelize.DataTypes.JSON,
      scope: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.TEXT,
      preconditions: Sequelize.DataTypes.TEXT,
      steps: Sequelize.DataTypes.JSON,
      user_id: Sequelize.DataTypes.INTEGER,
      test_suite_id: Sequelize.DataTypes.INTEGER,
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('test_cases');
  },
};
