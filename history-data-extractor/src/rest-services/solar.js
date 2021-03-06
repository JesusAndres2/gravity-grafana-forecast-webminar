const axios = require("axios");
const vars = require("../config/vars");
const R = require("ramda");

/**
 * Get solar Info of forecasting api.
 * If no time start/end parameter specified, get historical data of day from 00:00 to last
 * sample retrieved.
 * https://docs.stormglass.io/#/solar
 * @param {*} length
 * @param {*} latitude
 * @returns api response data
 *
 */
const getSolarData = (length, latitude) =>
    new Promise((resolve, reject) => {
        console.info(
            `Getting solar info about ${vars.params.solar} in latitude ${latitude} and length ${length}`
        );
        axios
            .get(
                `${vars.baseUrl}${vars.paths.solar}point?source=${vars.sources.stormGlass}&lat=${latitude}&lng=${length}&params=${vars.params.solar}`,
                {
                    headers: { Authorization: vars.apiKey }
                }).then(response => {
                    if (vars.loggerLevel === "DEBUG") {
                        console.debug(`Retrieved response from solar data: ${JSON.stringify(response.data)}`);
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

module.exports = getSolarData;
