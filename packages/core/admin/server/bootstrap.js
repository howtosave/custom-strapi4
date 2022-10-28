'use strict';

const { merge, map, difference, uniq } = require('lodash/fp');
const { pipeAsync } = require('@strapi/utils');
const { getService } = require('./utils');
const adminActions = require('./config/admin-actions');
const adminConditions = require('./config/admin-conditions');

const defaultAdminAuthSettings = {
  providers: {
    autoRegister: false,
    defaultRole: null,
  },
};

const registerPermissionActions = async () => {
  await getService('permission').actionProvider.registerMany(adminActions.actions);
};

const registerAdminConditions = async () => {
  await getService('permission').conditionProvider.registerMany(adminConditions.conditions);
};

// [PK] removed telemetry

const syncAuthSettings = async () => {
  const adminStore = await strapi.store({ type: 'core', name: 'admin' });
  const adminAuthSettings = await adminStore.get({ key: 'auth' });
  const newAuthSettings = merge(defaultAdminAuthSettings, adminAuthSettings);

  const roleExists = await getService('role').exists({
    id: newAuthSettings.providers.defaultRole,
  });

  // Reset the default SSO role if it has been deleted manually
  if (!roleExists) {
    newAuthSettings.providers.defaultRole = null;
  }

  await adminStore.set({ key: 'auth', value: newAuthSettings });
};

const syncAPITokensPermissions = async () => {
  const validPermissions = strapi.contentAPI.permissions.providers.action.keys();
  const permissionsInDB = await pipeAsync(
    strapi.query('admin::api-token-permission').findMany,
    map('action')
  )();

  const unknownPermissions = uniq(difference(permissionsInDB, validPermissions));

  if (unknownPermissions.length > 0) {
    await strapi
      .query('admin::api-token-permission')
      .deleteMany({ where: { action: { $in: unknownPermissions } } });
  }
};

module.exports = async () => {
  await registerAdminConditions();
  await registerPermissionActions();
  // [PK] removed telemetry

  const permissionService = getService('permission');
  const userService = getService('user');
  const roleService = getService('role');
  const apiTokenService = getService('api-token');
  const tokenService = getService('token');

  await roleService.createRolesIfNoneExist();
  await roleService.resetSuperAdminPermissions();
  await roleService.displayWarningIfNoSuperAdmin();

  await permissionService.ensureBoundPermissionsInDatabase();
  await permissionService.cleanPermissionsInDatabase();

  await userService.displayWarningIfUsersDontHaveRole();

  await syncAuthSettings();
  await syncAPITokensPermissions();

  apiTokenService.checkSaltIsDefined();
  tokenService.checkSecretIsDefined();
};
