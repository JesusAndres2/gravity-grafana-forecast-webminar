const db = require("../db/postgres");

/**
  Find metric for a given name

  @param name: metric name 

  @return metric found || null
*/
const findByName = async name => {
  if (name) {
    return await db.getTable('Metric').findOne({ where: { name }});
  } else {
    throw new Error(`Error finding Metric by name. Any required value is null. name: ${name}`);
  }
}


/**
  Create metric by name.

  @param name: metric nane
*/
const create = async name => {
  if (name) {
    return await db.getTable('Metric').create({ name });
  } else {
    throw new Error(`Error creating Metric by name. Any required value is null. name: ${name}`);
  }
}

module.exports = { findByName, create };
