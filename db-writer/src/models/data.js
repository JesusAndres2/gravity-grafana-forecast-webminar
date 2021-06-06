module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define('Data', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      value: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      metricId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      siteId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dimensionId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, { freezeTableName: true });
  
    return Data;
  };
  