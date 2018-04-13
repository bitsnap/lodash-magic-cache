import test from 'tape';

import _keys from 'lodash/fp/keys';
import _isFunction from 'lodash/fp/isFunction';
import _every from 'lodash/fp/every';
import _isPlainObject from 'lodash/fp/isPlainObject';
import cache from 'cache';

const _ = {
  keys: _keys,
  isFunction: _isFunction,
  every: _every,
  isPlainObject: _isPlainObject,
};

test('Should throw on invalid input', (t) => {
  t.plan(1);
  t.throws(() => cache.get({}), /Expecting/);
});

test('Should be able to retrieve multiple modules', (t) => {
  t.plan(9);
  const modules = ['keys', 'map', 'reduce'];

  cache.clear();
  t.ok(_.isFunction(cache.get(modules).map));
  t.ok(_.every(cache.has)(modules));
  t.deepEqual(_.keys(cache.get(modules)), modules);
  t.equal(cache.get(['get', 'map']).get({ a: 'x', b: '' }, 'a'), 'x');
  t.ok(_.isPlainObject(cache.get(modules)));

  cache.clear();
  t.notOk(cache.has('get'));
  t.notOk(cache.has('get', true));
  cache.get(modules, true);
  t.ok(_.every(m => cache.has(m, true))(modules));
  t.equal(cache.get(['get', 'map'], true).get('a')({ a: 'x', b: '' }), 'x');
});
