import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const pkg = require('./package.json');

export default {
  entry: 'index.js',
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'es2016', 'es2017', 'stage-0']
    })
  ],
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'intent.js',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
