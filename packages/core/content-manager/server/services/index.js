'use strict';

const components = require('./components');
const contentTypes = require('./content-types');
const dataMapper = require('./data-mapper');
//[PTK] remove useless code
/*const metrics = require('./metrics');*/
const permissionChecker = require('./permission-checker');
const permission = require('./permission');
const uid = require('./uid');
const entityManager = require('./entity-manager');

module.exports = {
  components,
  'content-types': contentTypes,
  'data-mapper': dataMapper,
  //[PTK] remove useless code /*metrics,*/
  'permission-checker': permissionChecker,
  permission,
  uid,
  'entity-manager': entityManager,
};
