import test from 'tape';

import _keys from 'lodash/fp/keys';
import _isFunction from 'lodash/fp/isFunction';

import cache from 'cache';

const _ = {
  keys: _keys,
  isFunction: _isFunction,
};

test('Should work both for lodash and lodash/fp', (t) => {
  t.plan(8);

  const check = (fp) => {
    cache.clear();
    t.ok(cache.get('keys'), fp);
    t.ok(cache.has('keys'), fp);
    t.ok(_.isFunction(cache.get('keys', fp).keys));
    t.deepEqual(cache.get('keys', fp).keys({ a: '', b: '' }), ['a', 'b']);
  };

  check();
  check(true);
});
