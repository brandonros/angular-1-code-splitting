var angular = require('angular');

angular
  .module('app')
  .directive('wrapper', function() {
    return {
      restrict: 'E',
      scope: {},
      link: function(scope, element, attributes) {
        window.addEventListener('relinkWrapper', function(event) {
          console.log('Relinking...');

          var $compile = angular.injector(['ng', 'app']).get('$compile');

          $compile(element.contents())(scope);
        });
       },
      controllerAs: 'ctrl'
    };
  });
