import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

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
      dest: 'dist/index.js',
      format: 'umd',
      moduleName: 'intent.js',
      sourceMap: true
    },
    {
      dest: 'dist/index.es',
      format: 'es',
      sourceMap: true
    }
  ]
};
