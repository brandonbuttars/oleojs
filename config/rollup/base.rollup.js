import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  output: {
    format: 'es',
    sourcemap: 'inline'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',  // Default: undefined
      extensions: [ '.js' ],  // Default: [ '.js' ]
      ignoreGlobal: false,  // Default: false
      sourceMap: true  // Default: true
      // sourceMap: false  // Default: true
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
