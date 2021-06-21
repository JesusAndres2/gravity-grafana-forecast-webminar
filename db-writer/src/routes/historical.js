const vars = require("../config/vars");
const Services = require("../services");

module.exports = [
    {
        route: `${vars.incominEvents.historical}`,
        action: "POST",
        handler: async event => {
            try {
                const { body } = event;
                const { site: { name, length, latitude }, data, mertricMeta } = JSON.parse(body);
                console.info("Checking site creation");
                const id = await Services.site.createIfNotExists(name, length, latitude);

                console.info("Checking metrics creation");
                const metricsIds = await Services.metric.createIfNotExists(mertricMeta);

                console.info("Inserting historical data in DB");
                await Services.data.insertDataInBatch(data, id, metricsIds);
                console.info("Inserting historical data in DB finished sucessfully");
                return true;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }]