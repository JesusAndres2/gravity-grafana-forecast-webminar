const DataServices = require("../data-services/");

/**
  check if metrics exists. If not, creates it
  @param data
    array with metrics. Shape:
    [{
      "metric": "xxxx",
      "value": "xx" || "xx" || ["xx", "xx"],
      "dimensions": undefined || ["xx"] || [["xx", "xx"]]
    },...]
*/
const createIfNotExists = async data => {
  try {
    // Search all Metrics.
    const metrics = data.map(item => item.metric);
    const uniqueMetrics = metrics.filter((item, position) => metrics.indexOf(item) === position);
    const promises = uniqueMetrics.map(async metric => {
      const metricSearch = await DataServices.metric.findByName(metric);
      if (!metricSearch) {
        console.info(`Metric ${metric} does not exists. Creating it`);
        DataServices.metric.create(metric);
      }
    });
    await Promise.all(promises);
  } catch (e) {
    console.error(`Error creating metric if not exists. Stack trace: ${e}`);
    throw new Error(`Error creating metric if not exists. Stack trace: ${e}`);
  }  
};

module.exports = { createIfNotExists };
