const axios = require("axios");
const vars = require("../config/vars");
const R = require("ramda");

/**
 * Get Weather Info of forecasting api
 * If no time start/end parameter specified, get historical data of day from 00:00 to last
 * sample retrieved.
 * https://docs.stormglass.io/#/weather
 * @param {*} length
 * @param {*} latitude
 * @returns api response data
 *
 */
const getWeatherData = (length, latitude) =>
    new Promise((resolve, reject) => {
        console.info(
            `Getting weather info about ${vars.params.weather} in latitude ${latitude} and length ${length}`
        );
        axios
            .get(
                `${vars.baseUrl}${vars.paths.weather}point?source=${vars.sources.stormGlass}&lat=${latitude}&lng=${length}&params=${vars.params.weather}`,
                {
                    headers: { Authorization: vars.apiKey }
                }).then(response => {
                    if (vars.loggerLevel === "DEBUG") {
                        console.debug(`Retrieved response from weather data: ${JSON.stringify(response.data)}`);
                    }
                    console.info(`retrieved ${response.data.hours.length} data points`);
                    resolve(response.data);
                })
            .catch(error => {
                if (error && R.hasPath(["response", "status"]) && R.hasPath(["response", "data", "errors"])) {
                    console.error(
                        `Error getting solar info about ${vars.params.solar} in latitude ${latitude} and length ${length}. Response status: ${error.response.status} and reason: ${JSON.stringify(error.response.data.errors)}`
                    );
                } else {
                    console.error(
                        `Error getting solar info about ${vars.params.solar} in latitude ${latitude} and length ${length}. Stack trace: ${error}`
                    ); 
                }
                reject(error);
            });
    });

module.exports = getWeatherData;
