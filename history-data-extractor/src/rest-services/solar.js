const axios = require("axios");
const vars = require("../config/vars");

/**
 * Get solar Info of forecasting api
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
                    console.info(`Retrieved response from solar data: ${JSON.stringify(response.data)}`);
                    resolve(response.data);
                })
            .catch(error => {
                console.error(
                    `Error getting solar info about ${vars.params.solar} in latitude ${latitude} and length ${length}. Stack trace: ${error}`
                );
                reject(error);
            });
    });

module.exports = getSolarData;
