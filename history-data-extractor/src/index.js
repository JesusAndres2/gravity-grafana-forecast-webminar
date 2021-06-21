const DataService = require("./services");
const vars = require("./config/vars");

/**
 * For every site stored in project configuration, execute Get data from
 * storm glass Api and send te correlated information to DB writer module
 * exposed by an http destination endpoint.
 */
const main = async () => {
  console.info("Starting historical data recollection");
  const promises = Object.keys(vars.sites).map(async siteKey => {
    const data = await DataService.getData(vars.sites[siteKey], siteKey);
    await DataService.sendData(data);
  });
  await Promise.all(promises);
  console.info("Finished historical data recollection");
};

main();
