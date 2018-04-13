import _isArray from 'lodash/fp/isArray';
import _isString from 'lodash/fp/isString';
import _flow from 'lodash/fp/flow';
import _map from 'lodash/fp/map';
import _filter from 'lodash/fp/filter';
import _startsWith from 'lodash/fp/startsWith';
import _replace from 'lodash/fp/replace';
import _fromPairs from 'lodash/fp/fromPairs';

const _ = {
  flow: _flow,
  isArray: _isArray,
  isString: _isString,
  map: _map,
  startsWith: _startsWith,
  filter: _filter,
  replace: _replace,
  fromPairs: _fromPairs,
};

const importedModules = new Map();

const requireLodash = (name) => {
  if (!importedModules.has(name)) {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    importedModules.set(name, require(`lodash/${name}`));
  }

  return importedModules.get(name);
};

const requireLodashFP = name => requireLodash(`fp/${name}`);

export default {
  get: (modules, fp = false) => {
    if (_.isArray(modules)) {
      return _.fromPairs(fp ?
        _.map(m => [m, requireLodashFP(m)])(modules)
        : _.map(m => [m, requireLodash(m)])(modules));
    }

    if (_.isString(modules)) {
      return _.fromPairs(fp ?
        [[modules, requireLodashFP(modules)]]
        : [[modules, requireLodash(modules)]]);
    }

    throw new TypeError(`Expecting [String] or a String lodash method name(s), instead got ${modules}`);
  },

  has: (name, fp = false) => importedModules.has(`${fp ? 'fp/' : ''}${name}`),

  clear: () => importedModules.clear(),
};
