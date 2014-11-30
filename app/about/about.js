'use strict';

angular.module('twrApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', function($scope){});