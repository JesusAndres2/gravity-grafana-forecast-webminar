const db = require("./db/postgres");
const Router = require("./routes");
let initialized = false;
/**
 * Bootstraping
 * Functions to be loaded before excecute the logic
 * @returns {Promise<void>}
 */
const bootstrapDb = async () => {
    console.info("Starting bootstrapping with database");
    await db.init();
    console.info("Started bootstrapping with database");
};

/**
 * Main handler
 * @param event
 * @param context
 * @returns {Promise<any>}
 */
module.exports.handler = async event => {
    try {
        // body,headers,,multiValueHeaders,multiValueQueryStringParameters,path,pathParameters,queryStringParameters,requestContext,resource,stageVariables,isOffline
        console.info(`Incoming event. Method ${event.httpMethod} and path: ${event.path}`);
        if (!initialized) {
            await bootstrapDb();
            initialized = true;
        }
        const response = await Router(event);
        // TODO: TO http response
        return response;
    } catch (error) {
        console.error(`Something was wrong. Stack trace: ${e}`);
        // TODO: Return 500
    }
};
