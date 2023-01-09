const bcrypt = require('bcryptjs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userSeed = Array.from({ length: 5 }).map((_, i) => ({
      name: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      is_admin: 0,
      created_at: new Date(),
      updated_at: new Date()
    }))
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('titaner', bcrypt.genSaltSync(10), null),
      is_admin: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, ...userSeed], {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
      .then(() => queryInterface.bulkDelete('Users', null, {}))
  }
}