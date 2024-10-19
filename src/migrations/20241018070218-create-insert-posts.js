'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'First Post',
        message: 'Description of first post by user 1.',
        userId: 1,
        likes: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Second Post',
        message: 'Description of second post by user 1.',
        userId: 1,
        likes: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Third Post',
        message: 'Description of first post by user 2.',
        userId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', {
      title: {
        [Sequelize.Op.in]: ['First Post', 'Second Post', 'Third Post']
      }
    });
  }
};

