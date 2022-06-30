import axios from 'axios';
import checkLatestStrapiVersion from './checkLatestStrapiVersion';
import { axiosInstance } from '../../../core/utils';
import packageJSON from '../../../../../package.json';

const strapiVersion = packageJSON.version;
const showUpdateNotif = !JSON.parse(localStorage.getItem('STRAPI_UPDATE_NOTIF'));

const fetchStrapiLatestRelease = async toggleNotification => {
  return strapiVersion;
  // [PK] remove useless codes
};

const fetchAppInfo = async () => {
  try {
    const { data, headers } = await axiosInstance.get('/admin/information');

    if (!headers['content-type'].includes('application/json')) {
      throw new Error('Not found');
    }

    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchCurrentUserPermissions = async () => {
  try {
    const { data, headers } = await axiosInstance.get('/admin/users/me/permissions');

    if (!headers['content-type'].includes('application/json')) {
      throw new Error('Not found');
    }

    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchUserRoles = async () => {
  try {
    const {
      data: {
        data: { roles },
      },
    } = await axiosInstance.get('/admin/users/me');

    return roles;
  } catch (err) {
    throw new Error(err);
  }
};

export { fetchAppInfo, fetchCurrentUserPermissions, fetchStrapiLatestRelease, fetchUserRoles };
