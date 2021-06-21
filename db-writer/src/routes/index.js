const R = require("ramda");
const historical = require("./historical");
const realTime = require("./real-time");

/**
 * Figure out event and allocate it with its handler
 * 
 * @param {*} event 
 * @returns 
 *  services responses
 */
module.exports = event => {
  const { resource, httpMethod } = event;
  console.info(`Looking for a router handler for event: ${httpMethod} ${resource}`);  
  // TODO: const allRoutes = [...historical, ...realTime];
  const allRoutes = [...historical];

  const route = R.find(
    ({ route, action }) => resource === route && httpMethod === action
  )(allRoutes);

  if (!route) {
    console.warn("No route match");
    throw new Error("No route match")
  }
  console.info(`Route handler found for event : ${httpMethod} ${resource}. Executing it`)

  return route.handler(event);
};
