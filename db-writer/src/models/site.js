module.exports = (sequelize, DataTypes) => {
    const Site = sequelize.define('Site', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      length: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      latitude: {
        type: DataTypes.DOUBLE,
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
  
    return Site;
  };
  