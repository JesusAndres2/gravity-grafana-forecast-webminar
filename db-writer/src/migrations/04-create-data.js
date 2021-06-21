module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Data", {
        "id": {
          "type": Sequelize.INTEGER,
          "field": "id",
          "autoIncrement": true,
          "primaryKey": true,
          "allowNull": false
        },
        "value": {
          "type": Sequelize.DOUBLE,
          "field": "value",
          "allowNull": false
        },
        "date": {
          "type": Sequelize.DATE,
          "field": "date",
          "allowNull": false
        },
        "metricId": {
          "type": Sequelize.INTEGER,
          "field": "metricId",
          "allowNull": false
        },
        "siteId": {
          "type": Sequelize.INTEGER,
          "field": "siteId",
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
      return queryInterface.dropTable("Data");
    }
  };
  