import cache from 'cache';

export default {
  lodash(modules) {
    return cache.get(modules, false);
  },

  lodashFP(modules) {
    return cache.get(modules, true);
  },
};
