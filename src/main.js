import cache from 'cache';

export default {
  lodash(modules) {
    return cache.get(modules, false);
  },

  fp(modules) {
    return cache.get(modules, true);
  },
};
