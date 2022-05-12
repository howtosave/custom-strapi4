import { sortBy } from 'lodash';

// [PK] fix icon not found error
// Search from https://fontawesome.com/v5/search?q=user&m=free
const _fasIcons = ['envelope', 'user', 'book'];

const createProvidersArray = data => {
  return sortBy(
    Object.keys(data).reduce((acc, current) => {
      const { icon: iconName, enabled, subdomain } = data[current];
      const icon = _fasIcons.indexOf(iconName) >= 0 ? ['fas', iconName] : ['fab', iconName];

      if (subdomain !== undefined) {
        acc.push({ name: current, icon, enabled, subdomain });
      } else {
        acc.push({ name: current, icon, enabled });
      }

      return acc;
    }, []),
    'name'
  );
};

export default createProvidersArray;
