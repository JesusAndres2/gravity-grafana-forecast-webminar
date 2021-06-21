const db = require("../db/postgres");

/**
  Create Data
  
  @param value
  @param date
  @param metricId
  @param siteId
*/
const create = async (value, date, metricId, siteId) => {
  // Value can be 0, avoid treatment of 0 as false.
  if (value != null && value != undefined && date && metricId && siteId) {
    return await db.getTable('Data').create({ value, date, metricId, siteId });
  } else {
    throw new Error(`Error creating data. Any required value is null. value: ${value}, date: ${date}, metricId: ${metricId}, siteId: ${siteId}`);
  }
}

module.exports = {
    create
}