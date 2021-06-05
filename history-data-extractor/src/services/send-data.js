const axios = require("axios");
const vars = require("../config/vars");

/**
 * Send forecast data within a given payload to server module with responsability of 
 * wirte these information in a relational database.
 * 
 * @param {*} payload 
 * @returns 
 */
module.exports = payload =>
    new Promise((resolve, reject) => {
        console.info("Sending forecast data to DB writer");
        axios
            .post(
                `${vars.destination.baseUrl}${vars.destination.historicalPath}`, payload
                ).then(() => {
                    console.info(`Forecast data from site ${JSON.stringify(payload.site)} sucessfully sent`);
                    resolve();
                })
            .catch(error => {
                console.error(`Error sending forecast data from site ${JSON.stringify(payload.site)}. Stack trace: ${error}`);
                reject(error);
            });
    });

