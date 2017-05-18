import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  format: 'umd',
  exports: 'named',
  dest: 'dist/bundle.js',
  moduleName: 'intent',
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'es2016', 'es2017', 'stage-0']
    })
  ],
  sourceMap: true
};
