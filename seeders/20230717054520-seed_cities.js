'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countries = await queryInterface.sequelize.query('SELECT id FROM "Countries";', {
      type: Sequelize.QueryTypes.SELECT,
    });

    const countryIdMap = {};
    countries.forEach(country => {
      countryIdMap[country.id] = country.id;
    });

    return queryInterface.bulkInsert('Cities', [
      { name: 'Москва', countryId: countryIdMap[1] },
      { name: 'Екатеринбург', countryId: countryIdMap[1] }, // Здесь 1 - это id России
      { name: 'Санкт-Петербург', countryId: countryIdMap[1] },
      { name: 'Киев', countryId: countryIdMap[2] }, // Здесь 2 - это id Украины
      { name: 'Харьков', countryId: countryIdMap[2] },
      { name: 'Одесса', countryId: countryIdMap[2] },
      { name: 'Минск', countryId: countryIdMap[3] },
      { name: 'Брест', countryId: countryIdMap[3] },
      { name: 'Гродно', countryId: countryIdMap[3] }, // Здесь 3 - это id Беларуси
      { name: 'Алматы', countryId: countryIdMap[4] },
      { name: 'Астана', countryId: countryIdMap[4] },
      { name: 'Шымкент', countryId: countryIdMap[4] }, // Здесь 4 - это id Казахстана
      // Добавьте другие города и их countryId, если необходимо
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};



