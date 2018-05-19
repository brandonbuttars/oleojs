const npm = require('./npm-tools');

// Arguments
let args = npm.args(process.argv);

// Constructor Strings
let awesome = args.awesome ? true : false,
    data = {
      name: 'OLEOjs',
      xunit: 'test/complete/results.txt',
      opts: 'test/mocha.opts',
      report: 'test/complete/report'
    };

if (awesome) {
  npm.run(`mocha --opts ${data.opts} -R mochawesome --reporter-options reportFilename=index.html,inlineAssets=true,reportPageTitle="${data.name}",reportTitle="${data.name}",reportDir=${data.report}; exit 0`);
} else {
  npm.run(`XUNIT_FILE=${data.xunit} mocha -R spec-xunit-file --opts ${data.opts}; exit 0`);
}
