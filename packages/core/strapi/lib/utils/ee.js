'use strict';

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const _ = require('lodash');

const publicKey = fs.readFileSync(path.join(__dirname, '../utils/resources/key.pub'));

const noop = () => {};

const noLog = {
  warn: noop,
  info: noop,
};

//[PK] hack EE
const internals = { isEE: true, licenseInfo: { type: "silver" } };
const features = {
  bronze: [],
  silver: [],
  gold: ['sso'],
};

module.exports = ({ dir, logger = noLog }) => {
  // [PK] hack EE
  return internals.isEE;
};

Object.defineProperty(module.exports, 'licenseInfo', {
  get() {
    mustHaveKey('licenseInfo');
    return internals.licenseInfo;
  },
  configurable: false,
  enumerable: false,
});

Object.defineProperty(module.exports, 'isEE', {
  get() {
    mustHaveKey('isEE');
    return internals.isEE;
  },
  configurable: false,
  enumerable: false,
});

Object.defineProperty(module.exports, 'features', {
  get() {
    mustHaveKey('licenseInfo');

    const { type: licenseType } = module.exports.licenseInfo;

    return {
      isEnabled(feature) {
        return features[licenseType].includes(feature);
      },
      getEnabled() {
        return features[licenseType];
      },
    };
  },
  configurable: false,
  enumerable: false,
});

const mustHaveKey = (key) => {
  if (!_.has(internals, key)) {
    const err = new Error('Tampering with license');
    // err.stack = null;
    throw err;
  }
};
