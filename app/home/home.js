'use strict';

angular.module('twrApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home/home.html',
    controller: 'siteCtrl'
  })
  .when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('siteCtrl', function($scope, $http){
  $http({method: 'GET', url: 'http://twrblog.herokuapp.com/posts.json'}).
  success(function(data, status, headers, config) {
    $scope.post = data;
  }).
  error(function(data, status, headers, config) {
    console.log("AJAX failed")
  });
})

.controller('homeCtrl', function($scope, $http, $timeout){
  $http({method: 'GET', url: 'http://twrblog.herokuapp.com/posts.json'}).
  success(function(data, status, headers, config) {
    $scope.post = data;
    console.log(data);
  }).
  error(function(data, status, headers, config) {
    console.log("AJAX failed")
  });
  // $http({method: 'GET', url: 'http://api.bandsintown.com/artists/the%20workday%20release/events.json?callback=?api_version=2.0&app_id=twr_site'}).
  // success(function(data, status, headers, config) {
  //   $scope.shows = data;
  //   console.log(data)
  // }).
  // error(function(data, status, headers, config) {
  //   console.log("AJAX failed")
  // });
  //This allows the twitter widget to reload when navigating back to home through ng-routes
  $timeout = twttr.widgets.load();
  
});