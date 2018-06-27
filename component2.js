var angular = require('angular');

function Controller() {
  var ctrl = this;

  ctrl.$onInit = function() {
    console.log('here');
  };
}

function Component2() {
  return {
    restrict: 'E',
    scope: {},
    controller: [
      Controller
    ],
    controllerAs: 'ctrl',
    template: '<div>Hello, world, 2!</div>'
  };
}

angular
  .module('app')
  .directive('component2', Component2);

console.log('component2 loaded');
