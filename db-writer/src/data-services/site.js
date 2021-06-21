const db = require("../db/postgres");

/**
  Find site by coordinates

  @param length
  @param latitude

*/
const findByCoordinates = async (length, latitude) => {
  if (length && latitude) {
    return await db.getTable('Site').findOne({ where: { length, latitude } });
  } else {
    throw new Error(`Error finding Site by coordinates. Any required value is null. length: ${length}, latitude: ${latitude}`);
  }
}


/**
  Create site.

  @param name
  @param latitude
  @param length
*/
const create = async (name, length, latitude) => {
  if (name && length && latitude) {
    return await db.getTable('Site').create({ name, latitude, length });
  } else {
    throw new Error(`Error creating Site. Any required value is null. name: ${name}, length: ${length}, latitude: ${latitude}`);
  }
}

module.exports = { findByCoordinates, create };
