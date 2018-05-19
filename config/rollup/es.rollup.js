import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';
import { minify } from 'uglify-es';
import json from 'rollup-plugin-json';

export default {
  output: {
    format: 'es'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    uglify({}, minify),
    commonjs({
      include: 'node_modules/**',  // Default: undefined
      extensions: [ '.js' ],  // Default: [ '.js' ]
      ignoreGlobal: false,  // Default: false
      sourceMap: false,  // Default: true
    }),
    json({
      include: ['src/**'],
      exclude: 'node_modules/**',
      preferConst: true,
      indent: '  '
    })
  ],
  globals: {
    riot: 'riot'
  }
};
