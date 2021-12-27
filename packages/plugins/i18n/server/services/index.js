'use strict';

const permissions = require('./permissions');
//[PTK] remove useless code
/*const metrics = require('./metrics');*/
const localizations = require('./localizations');
const locales = require('./locales');
const isoLocales = require('./iso-locales');
const entityServiceDecorator = require('./entity-service-decorator');
const coreApi = require('./core-api');
const contentTypes = require('./content-types');

module.exports = {
  permissions,
  //[PTK] remove useless code /*metrics,*/
  localizations,
  locales,
  'iso-locales': isoLocales,
  'entity-service-decorator': entityServiceDecorator,
  'core-api': coreApi,
  'content-types': contentTypes,
};
