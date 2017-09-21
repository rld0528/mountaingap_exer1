angular.
  module('myApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/projects', {
          template: '<my-projects></my-projects>'
        }).
        when('/projects/details', {
          template: '<my-projects-details></my-projects-details>'
        }).
        when('/skills', {
          template: '<skills></skills>'
        }).
        otherwise('/home');
    }
  ]);