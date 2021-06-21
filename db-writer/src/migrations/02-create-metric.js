module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Metric", {
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
      return queryInterface.dropTable("Metric");
    }
  };
  