const RestServices = require("../rest-services");
const vars = require("../config/vars");
const mapData = require("../mappers");

/**
 * Get data from a given site of weather and solar forecast api
 * 
 * @param {*} site { latitude: "", length }
 * @returns both api data merged and mapped
 */
module.exports = site => new Promise((resolve, reject) => {
    console.info(`Getting forecast historical day data of site: ${JSON.stringify(site)}`);
    const promises = [
      RestServices.getSolarData(site.length, site.latitude),
      RestServices.getWeatherData(site.length, site.latitude)
    ];
    Promise.all(promises).then(([solarData, weatherData]) => {
      console.info("Retrieved forecast data. Starting to map it");
      const result = mapData(weatherData, solarData, site);
      if (vars.loggerLevel === "DEBUG") {
        console.debug(`Mapping finished successfully. Result: ${JSON.stringify(result)}`);
      }
      console.info(`Mapping finished successfully from site ${JSON.stringify(site)}`);
      resolve(result);
    })
    .catch(error => {
        console.error(
          `Error retrieving forecast historical data of site ${JSON.stringify(site)}. Stack trace: ${error}`
        );
        reject(error);
    });
});