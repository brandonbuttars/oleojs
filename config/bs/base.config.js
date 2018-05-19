module.exports = {
  'ui': {
    'port': 8887,
    'weinre': {
      'port': 8886
    }
  },
  'files': [
    'dist',
    'index.js',
    '**/*.css',
    '**/*.html'
  ],
  'watchEvents': [
    'change'
  ],
  'watchOptions': {
    'ignoreInitial': true
  },
  'server': '.',
  'proxy': false,
  'port': 8888,
  'middleware': false,
  'serveStatic': [],
  'ghostMode': {
    'clicks': false,
    'scroll': false,
    'location': false,
    'forms': {
      'submit': false,
      'inputs': false,
      'toggles': false
    }
  },
  'logLevel': 'info',
  'logPrefix': 'Browsersync',
  'logConnections': false,
  'logFileChanges': true,
  'logSnippet': true,
  'rewriteRules': [],
  'open': false,
  'browser': 'default',
  'cors': false,
  'xip': false,
  'hostnameSuffix': false,
  'reloadOnRestart': true,
  'notify': false,
  'scrollProportionally': true,
  'scrollThrottle': 0,
  'scrollRestoreTechnique': 'window.name',
  'scrollElements': [],
  'scrollElementMapping': [],
  'reloadDelay': 0,
  'reloadDebounce': 500,
  'reloadThrottle': 0,
  'plugins': [],
  'injectChanges': true,
  'startPath': null,
  'minify': true,
  'host': null,
  'localOnly': false,
  'codeSync': true,
  'timestamps': true,
  'clientEvents': [
    'scroll',
    'scroll:element',
    'input:text',
    'input:toggles',
    'form:submit',
    'form:reset',
    'click'
  ],
  'socket': {
    'socketIoOptions': {
      'log': false
    },
    'socketIoClientConfig': {
      'reconnectionAttempts': 50
    },
    'path': '/browser-sync/socket.io',
    'clientPath': '/browser-sync',
    'namespace': '/browser-sync',
    'clients': {
      'heartbeatTimeout': 5000
    }
  },
  'tagNames': {
    'less': 'link',
    'scss': 'link',
    'css': 'link',
    'jpg': 'img',
    'jpeg': 'img',
    'png': 'img',
    'svg': 'img',
    'gif': 'img',
    'js': 'script'
  }
};
