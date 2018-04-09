import test from 'tape';

import _keys from 'lodash/fp/keys';

import MagicCache from 'cache';
import cache from 'main';

const _ = {
  keys: _keys,
};

test('Should use default exports with sepate caches for lodash and lodash/fp', (t) => {
  MagicCache.clear();
  MagicCache.clear(true);

  t.plan(4);
  t.ok(cache.lodash('keys'));
  t.deepEqual(_.keys(MagicCache.modules()), ['keys']);

  t.ok(cache.fp('map'));
  t.deepEqual(_.keys(MagicCache.modules(true)), ['map']);
});
