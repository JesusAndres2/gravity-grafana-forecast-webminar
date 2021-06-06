const R = require("ramda");
const historical = require("./historical");
const realTime = require("./real-time");

/**
 * Figure out event and allocate it with its handler
 * 
 * @param {*} event 
 * @returns 
 *  services responses
 *  null if no route found
 */
module.exports = event => {
  const { resource, httpMethod } = event;
  console.info(`Looking for a router handler for event: ${httpMethod} ${resource}`);  
  const allRoutes = [...historical, ...realTime];

  const route = R.find(
    ({ path, method }) => resource === path && httpMethod === method
  )(allRoutes);

  if (!route) {
    console.warn("No route match");
    return null;
  }
  console.info(`Route handler found for event : ${httpMethod} ${resource}. Executing it`)

  return route.action(event, trackingid, isAdmin);
};
