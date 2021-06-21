module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Site", {
        "id": {
          "type": Sequelize.INTEGER,
          "field": "id",
          "autoIncrement": true,
          "primaryKey": true,
          "allowNull": false
        },
        "name": {
          "type": Sequelize.STRING,
          "field": "name",
          "allowNull": false
        },
        "length": {
          "type": Sequelize.DOUBLE,
          "field": "length",
          "allowNull": false
        },
        "latitude": {
          "type": Sequelize.DOUBLE,
          "field": "latitude",
          "allowNull": false
        },
        "updatedAt": {
          "type": Sequelize.DATE,
          "field": "updatedAt",
          "allowNull": true
        },
        "createdAt": {
          "type": Sequelize.DATE,
          "field": "createdAt",
          "allowNull": true
        }
      });
    },
    down: queryInterface => {
      return queryInterface.dropTable("Site");
    }
  };
  