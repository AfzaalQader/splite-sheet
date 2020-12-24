const Sequelize = require('sequelize');
const dbCredentials = require('../config/db.credentials.json');
const development = dbCredentials.development;

const sequelize = new Sequelize(development.database_name, development.user, development.password, {
    host: development.host,
    dialect: development.dialect
});

// verify connection of db
// try {
//      sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

module.exports = sequelize;