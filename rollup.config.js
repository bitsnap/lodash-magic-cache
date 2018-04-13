import babel from 'rollup-plugin-babel';

const bundleBabelRC = {
  exclude: 'node_modules/**',
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: true,
      },
      forceAllTransforms: true,
      exclude: ['transform-regenerator'],
      modules: false,
    }],
    'minify',
  ],
  plugins: [
    ['module-resolver', {
      root: ['src'],
    }],
  ],
};

export default {
  input: 'src/main.js',
  plugins: [
    babel({
      babelrc: false,
      ...bundleBabelRC,
    }),
  ],
  external: [
    'lodash/fp',
    'lodash/fp/isArray',
    'lodash/fp/isString',
    'lodash/fp/map',
    'lodash/fp/flow',
    'lodash/fp/filter',
    'lodash/fp/startsWith',
    'lodash/fp/replace',
    'lodash/fp/fromPairs',
  ],
  output: [{
    file: 'dist/lodash-magic-cache.min.js',
    format: 'cjs',
    sourcemap: true,
  }],
};
