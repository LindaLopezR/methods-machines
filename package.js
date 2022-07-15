Package.describe({
  name: 'igoandtrack:methods-machines',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.7.3');
  api.use('ecmascript');
  api.use('igoandtrack:machines-collection');
  api.mainModule('methods-machines.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('methods-machines');
  api.mainModule('methods-machines-tests.js');
});
