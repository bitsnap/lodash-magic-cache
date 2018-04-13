import test from 'tape';

import _times from 'lodash/fp/times';
import cache from 'cache';

import { performance, PerformanceObserver } from 'perf_hooks';

const _ = {
  times: _times,
};

const measurePerformance = (fn) => {
  const wrappedPerfFn = performance.timerify(fn);

  let result = {};

  const obs = new PerformanceObserver((list) => {
    [result] = list.getEntries();
    obs.disconnect();
    performance.clearFunctions();
  });

  obs.observe({ entryTypes: ['function'] });

  wrappedPerfFn();

  return result.duration;
};

const nonCachedImport = () => measurePerformance(() => {
  // eslint-disable-next-line global-require
  _.times(() => require('lodash/fp/map'))(10);
});

const cachedImport = () => measurePerformance(() => {
  _.times(() => cache.get('map'))(10);
});

test('Cached imports should be faster', (t) => {
  t.plan(1);
  cache.clear();
  const speedup = cachedImport() / nonCachedImport();
  t.ok(speedup > 1);
});
