'use strict';

// Declare app level module which depends on views, and components
angular.module('twrApp', [
  'ngRoute',
  'twrApp.home',
  'twrApp.about',
  'twrApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
