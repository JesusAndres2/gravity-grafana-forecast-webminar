const DataService = require("../data-services");

/**
  check if metrics exists. If not, creates it
  @param data
    array with metrics. Shape:
    [{
      "metric": "xxxx",
      "value": "xx" || "xx" || ["xx", "xx"],
      "date": ""
      "dimensions": undefined || ["xx"] || [["xx", "xx"]]
    },...]
  @param siteId  
*/
const insertDataInBatch = async (data, siteId) => {
    try {
        const asyncPromises = data.map(async item => {
            const { metric, value, date } = item;
            const metric = await DataService.metric.findByName(metric);
            // Here, assume metricCreate if exists executed
            const metricId = metric.dataValues.id;
            await DataService.data.create(vlaye, date, metricId, siteId);
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
