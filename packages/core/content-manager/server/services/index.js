'use strict';

const components = require('./components');
const contentTypes = require('./content-types');
const dataMapper = require('./data-mapper');
// [PK] removed telemetry
const permissionChecker = require('./permission-checker');
const permission = require('./permission');
const uid = require('./uid');
const entityManager = require('./entity-manager');

module.exports = {
  components,
  'content-types': contentTypes,
  'data-mapper': dataMapper,
  // [PK] removed telemetry
  'permission-checker': permissionChecker,
  permission,
  uid,
  'entity-manager': entityManager,
};
