const DataService = require("../data-services");

/**
  check if metrics exists. If not, creates it
  @param data
    array with metrics. Shape:
    [{
      "metric1": "xxxx",
      "metric2": "xxxx",
      "time" ""
    },...]
  @param siteId  
*/
const insertDataInBatch = async (data, siteId, metricsIds) => {
    try {
        const asyncPromises = data.map(async item => {
            const { time } = item;
            delete item.time;
            const promises = [];
            Object.keys(item).forEach(key => {
              const metricId = metricsIds[key];
              promises.push(DataService.data.create(item[key], time, metricId, siteId));
            });
            await Promise.all(promises);                
        });
        await Promise.all(asyncPromises);
    } catch (error) {
        const errorMsg = `Error Inserting data In batch: ${data.length} points`;
        console.error(errorMsg);
        throw new Error(errorMsg);
    }
};

module.exports = {
    insertDataInBatch
};
