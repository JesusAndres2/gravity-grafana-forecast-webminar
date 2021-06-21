module.exports = (sequelize, DataTypes) => {
    const Metric = sequelize.define('Metric', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
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
  
    return Metric;
  };
  