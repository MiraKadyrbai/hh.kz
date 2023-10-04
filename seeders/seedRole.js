const Role = require('../app/auth/Role')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Получите доступ к модели Role через queryInterface
    // const { sequelize } = queryInterface;
    // const { DataTypes } = Sequelize;

    // Определите данные для создания записей
    await Role.bulkCreate([
      { name: 'employee' },
      { name: 'manager' }
    ]);
},

    // Создайте записи в таблице Role
//     const transaction = await sequelize.transaction();
//     try {
//       await queryInterface.bulkInsert('Roles', rolesData, { transaction });
//       await transaction.commit();
//     } catch (error) {
//       await transaction.rollback();
//       throw error;
//     }
//   },

  down: async (queryInterface, Sequelize) => {
    // Удалите записи из таблицы Role
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
