module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('test_runs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: Sequelize.DataTypes.INTEGER,
      name: Sequelize.DataTypes.STRING,
      status: Sequelize.DataTypes.STRING,
      description: Sequelize.DataTypes.TEXT,
      created_at: Sequelize.DataTypes.DATE,
      updated_at: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('test_runs');
  },
};
