module.exports = (sequelize, DataTypes) => {
    const Dimension = sequelize.define('Dimension', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      metricId: {
        type: DataTypes.INTEGER,
        allowNull: false
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
  
    return Dimension;
  };
  