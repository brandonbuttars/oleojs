const { exec } = require('child_process');

// Node Module (CommonJS)
let npm_tools = {
  args(args) {
    let arg_obj = {};
    if (args.length > 2) {
      args.shift();
      args.shift();
      arg_obj = args.reduce(function (acc, cur) {
        let text = cur.split('=');
        acc[text[0]] = text[1] || true;
        return acc;
      }, {});
    }
    return arg_obj;
  },
  run(script) {
    let scrpt = exec(script);

    scrpt.stdout.on('data', data => {
      console.log(`${data}`);
    });

    scrpt.stderr.on('data', data => {
      console.log(`${data}`);
    });

    scrpt.on('close', code => {
      console.log(`script closed with code ${code}`);
    });
  },
  env(args) {
    let env = 'development';
    if (args.dev || args.development) {
      env = 'development';
    } else if (args.prod || args.production) {
      env = 'production';
    } else if (args.stage || args.staging) {
      env = 'staging';
    } else if (args.test) {
      env = 'test';
    }
    return env;
  }
};

module.exports = npm_tools;
