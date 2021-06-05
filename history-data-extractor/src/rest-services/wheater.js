const axios = require("axios");
const vars = require("../config/vars");

/**
 * Get Weather Info of forecasting api
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
                `${vars.baseUrl}${vars.paths.solar}point?lat=${latitude}&lng=${length}&params=${vars.params.weather}`,
                {
                    headers: { Authorization: vars.apiKey }
                }).then(response => {
                    console.info(`Retrieved response from weather data: ${JSON.stringify(response.json())}`);
                    resolve(response.json());
                })
            .catch(error => {
                console.error(
                    `Error getting weather info about ${vars.params.weather} in latitude ${latitude} and length ${length}. Stack trace: ${error}`
                );
                reject(error);
            });
    });

module.exports = getWeatherData;
