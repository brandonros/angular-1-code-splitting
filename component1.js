var angular = require('angular');

function Controller() {
  var ctrl = this;

  ctrl.$onInit = function() {
    console.log('here');
  };
}

function Component1() {
  return {
    restrict: 'E',
    scope: {},
    controller: [
      Controller
    ],
    controllerAs: 'ctrl',
    template: '<div>Hello, world!</div>'
  };
}

angular
  .module('app')
  .directive('component1', Component1);

console.log('component1 loaded');
