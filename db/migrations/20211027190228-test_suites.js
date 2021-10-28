module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('test_suites', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.TEXT,
      test_run_id: Sequelize.DataTypes.INTEGER,
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('test_suites');
  },
};
