var angular = require('angular');

angular.module('app', []);

require('./wrapper.js');

angular.element(document).ready(function() {
  angular.bootstrap(document.body, ['app']);
});

setTimeout(function() {
  Promise.all([
    import('./component1.js'),
    import('./component2.js')
  ])
  .then(function() {
    window.dispatchEvent(new CustomEvent('relinkWrapper'));
  })
  .catch(function(err) {
    console.error(err);
  });
}, 5000);
