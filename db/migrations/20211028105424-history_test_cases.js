module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('history_test_cases', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      test_case_id: Sequelize.DataTypes.INTEGER,
      new_changes: Sequelize.DataTypes.JSON,
      old_changes: Sequelize.DataTypes.JSON,
      user_id: Sequelize.DataTypes.INTEGER,
      version: Sequelize.DataTypes.INTEGER,
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('history_test_cases');
  },
};
