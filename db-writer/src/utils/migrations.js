const Umzug = require('umzug');
const Sequelize = require('sequelize');
const path = require('path')

const getUmzugInstance = (sequelize) => {
 let umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
   sequelize: sequelize // here should be a sequelize instance, not the Sequelize module
  },
  migrations: {
   path: path.join(__dirname, '../migrations'),
   params: [
    sequelize.getQueryInterface(),
    Sequelize
   ]
  },
 });
 return umzug;
}

module.exports = { getUmzugInstance }