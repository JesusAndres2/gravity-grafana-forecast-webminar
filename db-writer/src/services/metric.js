const DataServices = require("../data-services/");

/**
  check if metrics exists. If not, creates it
  @param metricMeta
    array with metrics. Shape:
    [metric1, metric2, metric3, ...]
  @return Object with Key = metric name and value with metricId  
*/
const createIfNotExists = async metricMeta => {
  try {
    // Search all Metrics.
    const metricsIds = {};
    const promises = metricMeta.map(async metric => {
      let metricSearch = await DataServices.metric.findByName(metric);
      if (!metricSearch) {
        console.info(`Metric ${metric} does not exists. Creating it`);
        metricSearch = await DataServices.metric.create(metric);
      }
      metricsIds[metric] = metricSearch.dataValues.id;
    });
    await Promise.all(promises);
    return metricsIds;
  } catch (e) {
    console.error(`Error creating metric if not exists. Stack trace: ${e}`);
    throw new Error(`Error creating metric if not exists. Stack trace: ${e}`);
  }  
};

module.exports = { createIfNotExists };
