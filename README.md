# lodash-magic-cache

[![Greenkeeper badge](https://badges.greenkeeper.io/bitsnap/lodash-magic-cache.svg)](https://greenkeeper.io/)

[![npmjs](https://img.shields.io/npm/v/lodash-magic-cache.svg)](https://npmjs.org/package/lodash-magic-cache)
[![downloads](https://img.shields.io/npm/dw/lodash-magic-cache.svg)](https://npmjs.org/package/lodash-magic-cache)
[![CircleCI](https://img.shields.io/circleci/project/github/bitsnap/lodash-magic-cache.svg)](https://circleci.com/gh/bitsnap/lodash-magic-cache)
[![Coverage Status](https://coveralls.io/repos/github/bitsnap/lodash-magic-cache/badge.svg?branch=master)](https://coveralls.io/github/bitsnap/lodash-magic-cache?branch=master) 
[![dependencies](https://david-dm.org/bitsnap/lodash-magic-cache.svg)](https://david-dm.org/bitsnap/lodash-magic-cache)
[![devDependencies](https://david-dm.org/bitsnap/lodash-magic-cache/dev-status.svg)](https://david-dm.org/bitsnap/lodash-magic-cache#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/bitsnap/lodash-magic-cache/badge.svg)](https://snyk.io/test/github/bitsnap/lodash-magic-cache)

Magic cache 🍒 caches your lodash 📦 at Node.js for you.

Meant to be used with [lodash-magic-import](https://github.com/bitsnap/babel-plugin-lodash-magic-import) ✨

## How to use 

```
> npm i --save lodash lodash-magic-cache
```

with

```js
const _ = require('lodash-magic-cache').lodash([
  'map', 'forEach', 'keys'
]);
```

or 

```js
const _cache =  require('lodash-magic-cache').fp;

const _ = {
  map: _cache('map'),
  forEach: _cache('forEach'),
  keys:  _cache('keys'),
};
```

It's quite simple.

### When to use

Well, `require`'ing whole lodash takes a lot of time.
Even `require`'ing the same modules over and over is a hassle.

It's much faster on Node.js with a dedicated `_.memoize` powered cache.

`lodash-magic-cache` makes sense when you're targeting plain node.js, or using `babel` with [lodash-magic-import](https://github.com/bitsnap/babel-plugin-lodash-magic-import).

It's completely pointless with a bundler like [webpack](https://webpack.js.org/) or [rollup](https://rollupjs.org), because they've already using similar caching technique.

### Q&A

Feel free to ask some questions [via Discord](http://discord.gg/P7W9v9B).

## License

Licensed under [MIT](LICENSE) license, of course.