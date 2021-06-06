const Sequelize = require('sequelize');
const Umzug = require('../utils/migrations');
const vars = require("../config/vars");

let sequelize;
let db = {};

module.exports = {
  init: async () => {
    console.info("Starting up process of postgres database");  
    // get connections values
    const { postgres: { dbname, username, password, host, engine, port } } = vars;
    sequelize = new Sequelize(dbname, username, password, {
      host,
      dialect: engine,
      dialectOptions: {
        connectTimeout: 60000
      },
      port,
      database: dbname,
      logging: false
    });

    db = {
      Site: require('./models/site')(sequelize, Sequelize),
      Data: require('./models/data')(sequelize, Sequelize),
      Metric: require('./models/metric')(sequelize, Sequelize),
      Dimension: require('./models/dimension')(sequelize, Sequelize)
    };

    console.info("Executing pending migrations");
    const um = Umzug.getUmzugInstance(sequelize);
    await um.up();
    const pendingMigrations = await um.pending();
    const executedMigrations = await um.executed();
    console.info(`PENDING MIGRATIONS ${JSON.stringify(pendingMigrations)}`)
    console.info(`EXECUTED MIGRATIONS ${JSON.stringify(executedMigrations)}`)

    // Site has many data, and any data have always an allocated Site
    db["Site"].hasMany(db['Data'], { foreignKey: { name: "siteId", unique: false, constraints: false } });
    db["Data"].belongsTo(db['Site'], { foreignKey: { name: "siteId", unique: false, constraints: false } });

    // Any data, have one allocated metric
    db["Metric"].hasMany(db['Data'], { foreignKey: { name: "metricId", unique: false, constraints: false } });
    db["Data"].belongsTo(db["Metric"], { foreignKey: { name: "metricId", unique: false, constraints: false } });

    // Any dimension, belongs to any metric
    db["Metric"].hasOne(db["Dimension"], { foreignKey: { name: "metricId", unique: false, constraints: false } });
    console.info("Finished start up process of postgres database"); 
  }
};
