'use strict';

module.exports = {
  user: require('./user'),
  token: require('./token'),
  role: require('./role'),
  permission: require('./permission'),
  passport: require('./passport'),
  // [PK] removed telemetry
  'content-type': require('./content-type'),
  constants: require('./constants'),
  condition: require('./condition'),
  auth: require('./auth'),
  action: require('./action'),
  'api-token': require('./api-token'),
  'project-settings': require('./project-settings'),
};
