import test from 'tape';

import _keys from 'lodash/fp/keys';

import MagicCache from 'cache';

const _ = {
  keys: _keys,
};

const shouldRequire = (t, fp) => {
  t.plan(3);

  MagicCache.get('map', fp);
  t.deepEqual(_.keys(MagicCache.modules(fp)), ['map']);
  t.deepEqual(MagicCache.modules(fp).map, MagicCache.get('map', fp));

  MagicCache.clear(fp);
  t.deepEqual(_.keys(MagicCache.modules(fp)), []);
};

test('Should cache require', (t) => {
  shouldRequire(t);
});

test('Should cache require lodash/fp', (t) => {
  shouldRequire(t, true);
});

test('Should throw on invalid input', (t) => {
  t.plan(1);
  t.throws(() => MagicCache.get({}), /Expecting/);
});

test('Should be able to retrieve multiple modules', (t) => {
  t.plan(1);
  const modules = ['map', 'reduce'];
  MagicCache.get(modules);
  t.deepEqual(_.keys(MagicCache.modules()), modules);
});
