const npm = require('./npm-tools');

// Arguments
let args = npm.args(process.argv);

// Constructor Strings
let build = args.dist ? 'dist' : 'base',
    compressed = build === 'dist' ? ' --output-style compressed' : '',
    input = 'src/styles/styles.scss',
    output = build === 'dist' ? 'dist/styles/oleo.min.css' : 'dist/styles/oleo.css';

let cmd = `node-sass${compressed} ${input} > ${output}`;

npm.run(cmd);
