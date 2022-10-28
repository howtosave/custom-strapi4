'use strict';

const permissions = require('./permissions');
// [PK] removed telemetry
const localizations = require('./localizations');
const locales = require('./locales');
const isoLocales = require('./iso-locales');
const entityServiceDecorator = require('./entity-service-decorator');
const coreApi = require('./core-api');
const contentTypes = require('./content-types');

module.exports = {
  permissions,
  // [PK] removed telemetry
  localizations,
  locales,
  'iso-locales': isoLocales,
  'entity-service-decorator': entityServiceDecorator,
  'core-api': coreApi,
  'content-types': contentTypes,
};
