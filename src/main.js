import MagicCache from 'cache';

export default {
  lodash(modules) {
    return MagicCache.get(modules, false);
  },

  fp(modules) {
    return MagicCache.get(modules, true);
  },
};
