import _isArray from 'lodash/fp/isArray';
import _isString from 'lodash/fp/isString';
import _map from 'lodash/fp/map';

const _ = {
  isArray: _isArray,
  isString: _isString,
  map: _map,
};

let importedModules = {};
let importedModulesFp = {};

export default class MagicCache {
  static require(name, fp) {
    if (!fp && !importedModules[name]) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      importedModules[name] = require(`lodash/${name}`);
    }

    if (fp && !importedModulesFp[name]) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      importedModulesFp[name] = require(`lodash/fp/${name}`);
    }

    return fp ? importedModulesFp[name] : importedModules[name];
  }

  static get(modules, fp = false) {
    if (_.isArray(modules)) {
      return _.map(name => MagicCache.require(name, fp))(modules);
    }

    if (_.isString(modules)) {
      return MagicCache.require(modules, fp);
    }

    throw new TypeError(`Expecting [String] or a String lodash method name(s), instead got ${modules}`);
  }

  static modules(fp = false) {
    return fp ? importedModulesFp : importedModules;
  }

  static clear(fp = false) {
    if (fp) {
      importedModulesFp = {};
    } else {
      importedModules = {};
    }
  }
}
